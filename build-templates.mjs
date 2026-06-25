import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as esbuild from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = __dirname;
const outputDir = path.join(__dirname, 'wp-templates-export');

// Extract templates using regex
const headerRaw = fs.readFileSync(path.join(sourceDir, 'src/js/components/header.js'), 'utf8');
const footerRaw = fs.readFileSync(path.join(sourceDir, 'src/js/components/footer.js'), 'utf8');
const tickerRaw = fs.readFileSync(path.join(sourceDir, 'src/js/components/ticker.js'), 'utf8');

function extractTemplate(raw, isLight = false, currentFilename = '') {
  let match = raw.match(/return `(.*?)`;/s);
  if (!match) return '';
  let html = match[1];
  html = html.replace(/\$\{isLightTheme \? 'is-light-theme' : ''\}/g, isLight ? 'is-light-theme' : '');
  
  // Resolve active states based on filename
  html = html.replace(/\$\{currentPath === '\/' \|\| currentPath\.includes\('index\.html'\) \? 'active' : ''\}/g, currentFilename === 'index.html' ? 'active' : '');
  html = html.replace(/\$\{currentPath\.includes\('historia'\) \? 'active' : ''\}/g, currentFilename === 'nuestra-historia.html' ? 'active' : '');
  html = html.replace(/\$\{currentPath\.includes\('menu'\) \? 'active' : ''\}/g, currentFilename === 'menu.html' ? 'active' : '');
  html = html.replace(/\$\{currentPath\.includes\('eventos'\) \? 'active' : ''\}/g, currentFilename === 'eventos.html' ? 'active' : '');
  html = html.replace(/\$\{currentPath\.includes\('blog'\) \? 'active' : ''\}/g, currentFilename === 'blog.html' ? 'active' : '');
  
  html = html.replace(/\$\{iconoDarkSrc\}/g, 'src/assets/icono-negro.png');
  html = html.replace(/\$\{iconoLightSrc\}/g, 'src/assets/icono-blanco.png');
  html = html.replace(/\$\{logoSrc\}/g, 'src/assets/logo-blanco.png');
  html = html.replace(/\$\{new Date\(\)\.getFullYear\(\)\}/g, '2026');
  return html;
}

function renderTicker(theme) {
  let match = tickerRaw.match(/return `(.*?)`;/s);
  if (!match) return '';
  let html = match[1];
  const themeClass = theme === 'dark' ? '' : `theme-${theme}`;
  html = html.replace(/\$\{themeClass\}/g, themeClass);
  const p1 = "PASTEL DE CARNE MURCIANO";
  const p2 = "HONRAMOS LA TRADICIÓN";
  const p3 = "REINVENTAMOS EL SABOR";
  const separator = '<span class="ticker-separator"></span>';
  const repeatedText = Array(6).fill(`${p1} ${separator} ${p2} ${separator} ${p3} ${separator}`).join(' ');
  html = html.replace(/\$\{repeatedText\}/g, repeatedText);
  return html;
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Copy assets function
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}

// Ensure src exists in output
const srcOutputDir = path.join(outputDir, 'src');
if (fs.existsSync(path.join(sourceDir, 'src'))) {
  copyDir(path.join(sourceDir, 'src'), srcOutputDir);
}

// Modify main.js in output: We no longer need to comment out things because we updated main.js logic!
// Instead, we will bundle main.js using esbuild into bundle.js
try {
  await esbuild.build({
    entryPoints: [path.join(sourceDir, 'src', 'js', 'main.js')],
    bundle: true,
    minify: true,
    outfile: path.join(outputDir, 'bundle.js'),
    format: 'iife',
    loader: { '.png': 'file', '.jpg': 'file', '.jpeg': 'file', '.svg': 'file' },
    assetNames: 'src/assets/[name]',
  });
  console.log('Successfully bundled Javascript with esbuild.');
} catch (e) {
  console.error('Failed to bundle Javascript:', e);
}

// Process HTML files
const files = fs.readdirSync(sourceDir);
const htmlFiles = files.filter(f => f.endsWith('.html'));

const assetsDir = path.join(outputDir, 'src', 'assets');
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

// Logos are already in src/assets, so they will be copied along with the rest of the folder
fs.copyFileSync("c:\\Murcianitos\\Contexto\\Identidad digital\\Logo\\LOGO DEFINITIVO\\icono_negro.png", path.join(assetsDir, "icono-negro.png"));
fs.copyFileSync("c:\\Murcianitos\\Contexto\\Identidad digital\\Logo\\LOGO DEFINITIVO\\icono_blanco.png", path.join(assetsDir, "icono-blanco.png"));

for (const file of htmlFiles) {
  let html = fs.readFileSync(path.join(sourceDir, file), 'utf8');
  
  // Mock window object for header render
  global.window = { location: { pathname: '/' + file } };
  if (file === 'index.html') global.window.location.pathname = '/';
  
  // Replace Header
  const isLightTheme = file.includes('historia') || file.includes('blog') || file.includes('carta') || file.includes('pedir-ahora') || file.includes('contacto') || file.includes('faq') || file.includes('alergenos') || file.includes('privacidad') || file.includes('aviso-legal') || file.includes('cookies') || file.includes('accesibilidad');
  const headerHtml = extractTemplate(headerRaw, isLightTheme, file);
  html = html.replace(/<div id="header-placeholder"[^>]*><\/div>/, headerHtml);
  
  // Replace Footer
  const footerHtml = extractTemplate(footerRaw, false, file);
  html = html.replace(/<div id="footer-placeholder"[^>]*><\/div>/, footerHtml);
  
  // Replace Tickers
  html = html.replace(/<div class="ticker-placeholder" data-theme="([^"]+)"><\/div>/g, (match, theme) => {
    return renderTicker(theme);
  });
  
  // No need to fix /@fs/ paths because they are already relative now!
  
  // Fix logo paths in header/footer to be relative
  html = html.replace(/src="src\/assets\//g, 'src="./src/assets/');
  
  // Convert absolute root links to relative links so they work on file:/// and Hostinger subdirectories
  html = html.replace(/href="\/"/g, 'href="./index.html"');
  html = html.replace(/href="\/([a-zA-Z0-9_-]+\.html)"/g, 'href="./$1"');

  // Replace module script with bundled script
  html = html.replace(/<script type="module" src="\.\/src\/js\/main\.js"><\/script>/g, '<script src="./bundle.js"></script>');
  
  fs.writeFileSync(path.join(outputDir, file), html);
  console.log(`Exported ${file}`);
}

console.log('Export complete! Files are in wp-templates-export');

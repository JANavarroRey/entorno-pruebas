import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');
const projectDirsToSearch = [
  __dirname, // root for HTMLs
  path.join(__dirname, 'src', 'css'),
  path.join(__dirname, 'src', 'js'),
  path.join(__dirname, 'src', 'js', 'components')
];

// 1. Find all image files
function getFiles(dir, exts, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, exts, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (exts.includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

const images = getFiles(assetsDir, ['.png', '.jpg', '.jpeg']);

// 2. Normalize filename
function normalizeName(filename) {
  return filename
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove accents
    .toLowerCase()
    .replace(/\s+/g, '-') // spaces to hyphens
    .replace(/[^a-z0-9\-\.]/g, '') // remove special chars
    .replace(/\.(png|jpe?g)$/, '.webp'); // change extension
}

// 3. Find and replace in files
function replaceInFiles(search, replacement) {
  for (const dir of projectDirsToSearch) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') || f.endsWith('.css') || f.endsWith('.js'));
    for (const file of files) {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) continue;
      if (filePath.includes('node_modules') || filePath.includes('.git')) continue;
      
      let content = fs.readFileSync(filePath, 'utf8');
      const searchEncoded = encodeURI(search);
      
      if (content.includes(search) || content.includes(searchEncoded)) {
        content = content.split(search).join(replacement);
        content = content.split(searchEncoded).join(replacement);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated reference in ${file}: ${search} -> ${replacement}`);
      }
    }
  }
}

async function processImages() {
  console.log('Iniciando optimización de imágenes...');
  
  for (const originalPath of images) {
    const dir = path.dirname(originalPath);
    const originalName = path.basename(originalPath);
    const newName = normalizeName(originalName);
    const newPath = path.join(dir, newName);
    
    try {
      await sharp(originalPath)
        .resize({ width: 1920, withoutEnlargement: true }) 
        .webp({ quality: 80 }) 
        .toFile(newPath);
        
      console.log(`✅ Procesado: ${originalName} -> ${newName}`);
      
      replaceInFiles(originalName, newName);
      
      fs.unlinkSync(originalPath);
      
    } catch (e) {
      console.error(`❌ Error procesando ${originalName}:`, e.message);
    }
  }

  const logoWebp = path.join(assetsDir, 'logo', 'icono_negro.webp');
  if (fs.existsSync(logoWebp)) {
    console.log('Generando favicon...');
    await sharp(logoWebp).resize(32, 32).png().toFile(path.join(__dirname, 'favicon.png'));
    await sharp(logoWebp).resize(180, 180).png().toFile(path.join(__dirname, 'apple-touch-icon.png'));
    
    const rootHtmls = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));
    for (const html of rootHtmls) {
      const htmlPath = path.join(__dirname, html);
      let content = fs.readFileSync(htmlPath, 'utf8');
      if (!content.includes('favicon.png')) {
        const faviconTags = `\n  <link rel="icon" type="image/png" href="./favicon.png">\n  <link rel="apple-touch-icon" href="./apple-touch-icon.png">`;
        content = content.replace('</head>', `${faviconTags}\n</head>`);
        fs.writeFileSync(htmlPath, content, 'utf8');
      }
    }
    console.log('✅ Favicon generado y añadido a los HTMLs.');
  }

  console.log('¡Optimización completada! 🎉');
}

processImages();

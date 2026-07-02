import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceDir = __dirname;
const themeDir = path.join(__dirname, 'murcianitos-theme');

const htmlFiles = fs.readdirSync(sourceDir).filter(f => f.endsWith('.html') && f !== 'index.html');

for (const file of htmlFiles) {
  let html = fs.readFileSync(path.join(sourceDir, file), 'utf8');
  
  // Extraer estilos inline (si los hay)
  let styleContent = '';
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/i);
  if (styleMatch) {
    styleContent = `\n<style>\n${styleMatch[1]}\n</style>\n`;
  }
  
  // Extraer main
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!mainMatch) {
    console.log(`Saltando ${file} (no tiene <main>)`);
    continue;
  }
  
  const slug = file.replace('.html', '');
  
  // Extraer el tag <main> tal cual para preservar sus atributos (como style)
  const mainTagMatch = html.match(/<main[^>]*>/i);
  let mainTag = mainTagMatch ? mainTagMatch[0] : '<main>';
  
  // Ajustar padding-top para pedir-ahora y contacto
  if (slug === 'pedir-ahora' || slug === 'contacto') {
    mainTag = mainTag.replace(/padding-top:\s*(80px|100px)/, 'padding-top: 140px');
  }
  
  let mainContent = `${mainTag}\n${mainMatch[1]}\n</main>`;
  
  // Extraer scripts locales (ignorando globals como GSAP o main.js)
  let scriptContent = '';
  const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
  let sMatch;
  while ((sMatch = scriptRegex.exec(html)) !== null) {
    const fullTag = sMatch[0];
    if (!fullTag.includes('main.js') && !fullTag.includes('gsap.min.js') && !fullTag.includes('ScrollTrigger.min.js')) {
      scriptContent += `\n${fullTag}\n`;
    }
  }
  
  // Reemplazar rutas de imágenes
  mainContent = mainContent.replace(/src="[^"]*src\/assets\/([^"]+)"/g, 'src="<?php echo get_template_directory_uri(); ?>/assets/images/$1"');
  // Ajuste por si están como "./src/assets/"
  mainContent = mainContent.replace(/src="\.\/src\/assets\/([^"]+)"/g, 'src="<?php echo get_template_directory_uri(); ?>/assets/images/$1"');
  
  // Reemplazar tickers HTML estáticos con PHP dinámico
  mainContent = mainContent.replace(/<div class="ticker-placeholder" data-theme="([^"]+)"><\/div>/g, (match, theme) => {
    const themeClass = theme === 'dark' ? '' : ` theme-${theme}`;
    return `
    <div class="ticker-track${themeClass}">
      <div class="ticker-content">
        <?php
        $p1 = "PASTEL DE CARNE MURCIANO";
        $p2 = "HONRAMOS LA TRADICIÓN";
        $p3 = "REINVENTAMOS EL SABOR";
        $separator = '<span class="ticker-separator"></span>';
        $repeated_text = str_repeat("$p1 $separator $p2 $separator $p3 $separator ", 6);
        echo $repeated_text;
        ?>
      </div>
    </div>`;
  });
  
  // Reemplazar enlaces internos HTML por home_url() de WordPress
  mainContent = mainContent.replace(/href="\.\/([^"]+)\.html"/g, "href=\"<?php echo home_url('/$1/'); ?>\"");
  mainContent = mainContent.replace(/href="([^"]+)\.html"/g, "href=\"<?php echo home_url('/$1/'); ?>\"");
  mainContent = mainContent.replace(/href="\/"/g, "href=\"<?php echo home_url('/'); ?>\"");
  
  // Si es un post del blog, el template debería ser single-{post-type}.php o simplemente lo exportamos como page- para la maquetación.
  // Para WP nativo, los blogs se renderizan en single.php, pero por ahora exportaremos como page- para que no se pierdan.
  let templateName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  const phpContent = `<?php
/**
 * Template Name: ${templateName}
 */
if (!defined('ABSPATH')) exit;

get_header();
?>
${styleContent}
${mainContent}
${scriptContent}

<?php get_footer(); ?>
`;

  const phpFileName = `page-${slug}.php`;
  fs.writeFileSync(path.join(themeDir, phpFileName), phpContent, 'utf8');
  console.log(`Generado: ${phpFileName}`);
}

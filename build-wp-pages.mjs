import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const themeDir = path.join(__dirname, 'murcianitos-child');

const pagesToConvert = [
  { html: 'nuestra-historia.html', php: 'page-nuestra-historia.php', title: 'Nuestra Historia' },
  { html: 'carta.html', php: 'page-carta.php', title: 'Carta' },
  { html: 'contacto.html', php: 'page-contacto.php', title: 'Contacto' },
  { html: 'eventos.html', php: 'page-eventos.php', title: 'Eventos' },
  { html: 'faq.html', php: 'page-faq.php', title: 'Preguntas Frecuentes' },
  { html: 'alergenos.html', php: 'page-alergenos.php', title: 'Alérgenos' },
  { html: 'donde-encontrarnos.html', php: 'page-donde-encontrarnos.php', title: 'Dónde Encontrarnos' },
  { html: 'privacidad.html', php: 'page-privacidad.php', title: 'Privacidad' },
  { html: 'cookies.html', php: 'page-cookies.php', title: 'Cookies' },
  { html: 'aviso-legal.html', php: 'page-aviso-legal.php', title: 'Aviso Legal' }
];

for (const page of pagesToConvert) {
  const htmlPath = path.join(__dirname, page.html);
  if (!fs.existsSync(htmlPath)) {
    console.log(`Skipping ${page.html} (Not found)`);
    continue;
  }

  const rawHtml = fs.readFileSync(htmlPath, 'utf8');
  
  // Extract content between <main> and </main> (or try to guess if no main)
  let mainContent = '';
  const mainMatch = rawHtml.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    mainContent = mainMatch[0]; // keep the <main> tags
  } else {
    // fallback: take everything between header placeholder and footer placeholder
    const bodyMatch = rawHtml.match(/<\/header>([\s\S]*?)<footer/i);
    if (bodyMatch) {
      mainContent = `<main id="primary" class="site-main">\n${bodyMatch[1]}\n</main>`;
    }
  }

  // Replace static image paths with WordPress dynamic paths
  mainContent = mainContent.replace(/src="\.?\/src\/assets\/images\//g, 'src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/');
  // Replace links to html files with WP urls
  mainContent = mainContent.replace(/href="\.?\/nuestra-historia\.html"/g, 'href="<?php echo home_url(\'/nuestra-historia/\'); ?>"');
  mainContent = mainContent.replace(/href="\.?\/carta\.html"/g, 'href="<?php echo home_url(\'/carta/\'); ?>"');
  mainContent = mainContent.replace(/href="\.?\/contacto\.html"/g, 'href="<?php echo home_url(\'/contacto/\'); ?>"');
  mainContent = mainContent.replace(/href="\.?\/eventos\.html"/g, 'href="<?php echo home_url(\'/eventos/\'); ?>"');
  mainContent = mainContent.replace(/href="\.?\/faq\.html"/g, 'href="<?php echo home_url(\'/faq/\'); ?>"');
  mainContent = mainContent.replace(/href="\.?\/pedir-ahora\.html"/g, 'href="<?php echo wc_get_checkout_url(); ?>"');
  mainContent = mainContent.replace(/href="\.?\/index\.html"/g, 'href="<?php echo home_url(\'/\'); ?>"');

  const phpTemplate = `<?php
/**
 * Template Name: ${page.title}
 */

get_header(); ?>

${mainContent}

<?php get_footer(); ?>
`;

  fs.writeFileSync(path.join(themeDir, page.php), phpTemplate, 'utf8');
  console.log(`✅ Generated ${page.php}`);
}

// Special case for WooCommerce Shop/Cart/Checkout pages? 
// We will let WooCommerce handle the logic, but we can override woo templates later.

console.log('All page templates generated in murcianitos-child!');

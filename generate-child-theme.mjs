import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const themeName = 'murcianitos-child';
const themeDir = path.join(__dirname, themeName);

// 1. Create Theme Directory
if (!fs.existsSync(themeDir)) {
  fs.mkdirSync(themeDir);
}

// 2. Create style.css
const styleCss = `/*
Theme Name: Murcianitos Child
Theme URI: https://murcianitos.com
Description: Tema hijo custom para Murcianitos basado en Astra.
Author: Antigravity AI
Template: astra
Version: 1.0.0
*/

/* Aquí se inyectan los tokens y utilidades base */
`;
fs.writeFileSync(path.join(themeDir, 'style.css'), styleCss);

// 3. Create functions.php
const functionsPhp = `<?php
/**
 * Murcianitos Child Theme Functions
 */

function murcianitos_enqueue_styles() {
    // Parent style
    wp_enqueue_style( 'astra-theme-css', get_template_directory_uri() . '/style.css' );
    
    // Custom styles
    wp_enqueue_style( 'murcianitos-tokens', get_stylesheet_directory_uri() . '/assets/css/tokens.css', array(), '1.0.0' );
    wp_enqueue_style( 'murcianitos-reset', get_stylesheet_directory_uri() . '/assets/css/reset.css', array(), '1.0.0' );
    wp_enqueue_style( 'murcianitos-base', get_stylesheet_directory_uri() . '/assets/css/base.css', array('murcianitos-tokens'), '1.0.0' );
    
    // Components
    wp_enqueue_style( 'murcianitos-header', get_stylesheet_directory_uri() . '/assets/css/components/header.css', array(), '1.0.0' );
    wp_enqueue_style( 'murcianitos-footer', get_stylesheet_directory_uri() . '/assets/css/components/footer.css', array(), '1.0.0' );
    wp_enqueue_style( 'murcianitos-buttons', get_stylesheet_directory_uri() . '/assets/css/components/buttons.css', array(), '1.0.0' );
    wp_enqueue_style( 'murcianitos-hero', get_stylesheet_directory_uri() . '/assets/css/components/hero.css', array(), '1.0.0' );
    
    // Scripts
    wp_enqueue_script( 'murcianitos-main', get_stylesheet_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'murcianitos_enqueue_styles', 20 );

// Disable Astra default features that conflict with our custom design
add_filter( 'astra_enable_default_fonts', '__return_false' );
`;
fs.writeFileSync(path.join(themeDir, 'functions.php'), functionsPhp);

// 4. Copy Assets (CSS, JS, Images)
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const assetsDest = path.join(themeDir, 'assets');
copyDir(path.join(__dirname, 'src', 'css'), path.join(assetsDest, 'css'));
copyDir(path.join(__dirname, 'src', 'js'), path.join(assetsDest, 'js'));
copyDir(path.join(__dirname, 'src', 'assets'), path.join(assetsDest, 'images'));

console.log('✅ Carpeta del tema hijo "murcianitos-child" generada correctamente.');
console.log('Puedes comprimirla en .zip y subirla a WordPress en Apariencia -> Temas.');

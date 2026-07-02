/**
 * build-standalone-theme.mjs
 *
 * Script para empaquetar el tema STANDALONE (sin Astra).
 *
 * 1. Concatena CSS → murcianitos-theme/style.css
 * 2. Copia imágenes → murcianitos-theme/assets/images/
 * 3. Verifica archivos PHP
 * 4. Genera ZIP con rutas Linux (/)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as esbuild from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const themeDir = path.join(__dirname, 'murcianitos-theme');
const srcAssets = path.join(__dirname, 'src', 'assets');
const themeImages = path.join(themeDir, 'assets', 'images');

// ─── PASO 1: Copiar imágenes ───
console.log('📦 Paso 1/4: Copiando imágenes...');
fs.mkdirSync(path.join(themeImages, 'logo'), { recursive: true });

let imagesCopied = 0;
for (const file of fs.readdirSync(srcAssets)) {
  const srcPath = path.join(srcAssets, file);
  const stat = fs.statSync(srcPath);

  if (stat.isFile() && file.endsWith('.webp')) {
    fs.copyFileSync(srcPath, path.join(themeImages, file));
    imagesCopied++;
  } else if (stat.isDirectory() && file === 'logo') {
    for (const logoFile of fs.readdirSync(srcPath)) {
      if (logoFile.endsWith('.webp')) {
        fs.copyFileSync(
          path.join(srcPath, logoFile),
          path.join(themeImages, 'logo', logoFile)
        );
        imagesCopied++;
      }
    }
  }
}
console.log(`   ✅ ${imagesCopied} imágenes copiadas`);

// ─── PASO 2: Generar style.css ───
console.log('🎨 Paso 2/4: Generando style.css...');

// NOTA: SIN "Template: astra" → tema STANDALONE
const themeHeader = `/*
Theme Name: Murcianitos
Theme URI: https://murcianitos.com
Description: Tema custom standalone para Murcianitos — El nuevo culto al hojaldre.
Author: Murcianitos S.L.
Version: 2.0.0
Requires at least: 6.0
Tested up to: 7.0
Requires PHP: 7.4
License: Proprietary
Text Domain: murcianitos
*/

`;

const cssFiles = [
  'src/css/reset.css',
  'src/css/tokens.css',
  'src/css/base.css',
  'src/css/components/header.css',
  'src/css/components/footer.css',
  'src/css/components/buttons.css',
  'src/css/components/hero.css',
  'src/css/components/ticker.css',
  'src/css/components/cards.css',
  'src/css/components/accessibility.css',
  'src/css/components/forms.css'
];

let allCss = themeHeader;

for (const file of cssFiles) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Eliminar @import url() ya que las fuentes se cargan via <link> en header.php
    content = content.replace(/@import url\([^)]+\);?\s*/g, '');
    allCss += `\n/* ═══ ${path.basename(file).toUpperCase()} ═══ */\n`;
    allCss += content + '\n';
  } else {
    console.log(`   ⚠️  No encontrado: ${file}`);
  }
}

// Estilos inline de index.html (about-grid, products-grid, gifting, instagram)
const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const styleMatch = indexHtml.match(/<style>([\s\S]*?)<\/style>/i);
if (styleMatch) {
  allCss += `\n/* ═══ HOME PAGE STYLES (from index.html) ═══ */\n`;
  allCss += styleMatch[1] + '\n';
}

fs.writeFileSync(path.join(themeDir, 'style.css'), allCss, 'utf8');
console.log(`   ✅ style.css generado (${allCss.split('\n').length} líneas)`);

// ─── PASO 2.5: Empaquetar JavaScript original ───
console.log('📦 Paso 2.5/4: Empaquetando JS original con esbuild...');
try {
  await esbuild.build({
    entryPoints: [path.join(__dirname, 'src', 'js', 'main.js')],
    bundle: true,
    minify: true,
    outfile: path.join(themeDir, 'assets', 'js', 'main.js'),
    format: 'iife',
    loader: { '.png': 'file', '.webp': 'file', '.jpg': 'file', '.jpeg': 'file', '.svg': 'file' },
    assetNames: '../images/[name]' // Para que si hay imports de assets en JS los mueva correctamente
  });
  console.log('   ✅ JS empaquetado correctamente');
} catch (e) {
  console.error('   ❌ Error al empaquetar JS:', e);
}

// ─── PASO 3: Verificar archivos ───
console.log('🔍 Paso 3/4: Verificando archivos...');

const requiredFiles = [
  'style.css', 'functions.php', 'header.php', 'footer.php',
  'front-page.php', 'index.php', 'assets/js/main.js'
];

let allPresent = true;
for (const file of requiredFiles) {
  const filePath = path.join(themeDir, file);
  if (fs.existsSync(filePath)) {
    const size = fs.statSync(filePath).size;
    console.log(`   ✅ ${file} (${(size / 1024).toFixed(1)} KB)`);
  } else {
    console.log(`   ❌ FALTA: ${file}`);
    allPresent = false;
  }
}

if (!allPresent) {
  console.error('\n❌ Faltan archivos. Abortando.');
  process.exit(1);
}

// ─── PASO 4: Info ───
console.log('\n✅ Archivos del tema listos en murcianitos-theme/');
console.log('');
console.log('Ahora ejecuta el siguiente comando para generar el ZIP:');
console.log('  powershell -ExecutionPolicy Bypass -File build-zip.ps1');

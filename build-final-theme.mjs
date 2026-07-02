/**
 * build-final-theme.mjs
 * 
 * Script definitivo para empaquetar el tema hijo de WordPress.
 * 
 * Hace 4 cosas:
 * 1. Copia TODAS las imágenes de src/assets/ a murcianitos-child/assets/images/
 * 2. Concatena TODOS los CSS en un solo style.css (con cabecera de tema WP)
 * 3. Mantiene functions.php, header.php, footer.php, front-page.php intactos
 * 4. Genera el ZIP final listo para subir a WordPress
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const themeDir = path.join(__dirname, 'murcianitos-child');
const srcAssets = path.join(__dirname, 'src', 'assets');
const themeImages = path.join(themeDir, 'assets', 'images');

// ─────────────────────────────────────────────
// PASO 1: Copiar TODAS las imágenes
// ─────────────────────────────────────────────
console.log('📦 Paso 1/4: Copiando imágenes...');

// Ensure target directory exists
fs.mkdirSync(themeImages, { recursive: true });
fs.mkdirSync(path.join(themeImages, 'logo'), { recursive: true });

// Copy all .webp files from src/assets/ to theme/assets/images/
const srcFiles = fs.readdirSync(srcAssets);
let imagesCopied = 0;
for (const file of srcFiles) {
  const srcPath = path.join(srcAssets, file);
  const stat = fs.statSync(srcPath);
  
  if (stat.isFile() && file.endsWith('.webp')) {
    fs.copyFileSync(srcPath, path.join(themeImages, file));
    imagesCopied++;
  } else if (stat.isDirectory() && file === 'logo') {
    // Copy logo subdirectory
    const logoFiles = fs.readdirSync(srcPath);
    for (const logoFile of logoFiles) {
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

// ─────────────────────────────────────────────
// PASO 2: Generar style.css unificado
// ─────────────────────────────────────────────
console.log('🎨 Paso 2/4: Generando style.css...');

// WordPress theme header (MUST be at the very top)
const themeHeader = `/*
Theme Name: Murcianitos Child
Theme URI: https://murcianitos.com
Description: Tema hijo custom para Murcianitos basado en Astra.
Author: Murcianitos S.L.
Template: astra
Version: 1.1.0
*/

`;

// CSS files to concatenate, IN ORDER (dependencies first)
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
    
    // CRITICAL: Remove @import url() lines from the CSS
    // Google Fonts are loaded via <link> tags in header.php instead
    // CSS @import inside a concatenated file (after other rules) is INVALID
    content = content.replace(/@import url\([^)]+\);?\s*/g, '');
    
    allCss += `\n/* ═══════════════════════════════════════ */\n`;
    allCss += `/* ${path.basename(file).toUpperCase()} */\n`;
    allCss += `/* ═══════════════════════════════════════ */\n`;
    allCss += content + '\n';
  } else {
    console.log(`   ⚠️  No encontrado: ${file} (se omite)`);
  }
}

// Also extract and append the inline <style> from index.html
// (these are page-specific styles like .about-grid, .products-grid, etc.)
const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const styleMatch = indexHtml.match(/<style>([\s\S]*?)<\/style>/i);
if (styleMatch) {
  allCss += `\n/* ═══════════════════════════════════════ */\n`;
  allCss += `/* INDEX.HTML INLINE STYLES */\n`;
  allCss += `/* ═══════════════════════════════════════ */\n`;
  allCss += styleMatch[1] + '\n';
}

// Write the final style.css
fs.writeFileSync(path.join(themeDir, 'style.css'), allCss, 'utf8');
const cssLines = allCss.split('\n').length;
console.log(`   ✅ style.css generado (${cssLines} líneas)`);

// ─────────────────────────────────────────────
// PASO 3: Verificar archivos PHP
// ─────────────────────────────────────────────
console.log('🔍 Paso 3/4: Verificando archivos PHP...');

const requiredFiles = [
  'functions.php',
  'header.php',
  'footer.php',
  'front-page.php',
  'style.css'
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
  console.error('\n❌ Faltan archivos críticos. Abortando.');
  process.exit(1);
}

// ─────────────────────────────────────────────
// PASO 4: Generar ZIP con rutas Linux (/)
// ─────────────────────────────────────────────
console.log('📦 Paso 4/4: Generando ZIP...');

const zipPath = path.join(__dirname, 'murcianitos-child-final.zip');

// Delete old zip if exists
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

// PowerShell's Compress-Archive uses Windows backslashes internally.
// Instead, we'll use a PowerShell script that creates a proper ZIP 
// using .NET's ZipFile class with forward slashes.
const psScript = `
Add-Type -Assembly 'System.IO.Compression.FileSystem'

$sourceDir = '${themeDir.replace(/\\/g, '\\\\')}'
$zipFile = '${zipPath.replace(/\\/g, '\\\\')}'

# Delete existing zip if present
if (Test-Path $zipFile) { Remove-Item $zipFile }

# Create zip with proper forward-slash entry names
$zip = [System.IO.Compression.ZipFile]::Open($zipFile, 'Create')

Get-ChildItem -Path $sourceDir -Recurse -File | ForEach-Object {
    $relativePath = $_.FullName.Substring($sourceDir.Length + 1)
    # CRITICAL: Convert Windows backslashes to forward slashes
    # AND prefix with theme folder name (WordPress requires a root directory)
    $entryName = 'murcianitos-child/' + $relativePath.Replace('\\', '/')
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
        $zip, $_.FullName, $entryName, 'Optimal'
    ) | Out-Null
}

$zip.Dispose()
Write-Output "ZIP created with forward slashes"
`;

try {
  // Write the PowerShell script to a temp file
  const psPath = path.join(__dirname, '_create_zip.ps1');
  fs.writeFileSync(psPath, psScript, 'utf8');
  
  execSync(
    `powershell -ExecutionPolicy Bypass -File "_create_zip.ps1"`,
    { cwd: __dirname, stdio: 'pipe' }
  );
  
  // Clean up temp script
  fs.unlinkSync(psPath);
  
  const zipSize = fs.statSync(zipPath).size;
  console.log(`   ✅ murcianitos-child-final.zip (${(zipSize / 1024 / 1024).toFixed(2)} MB)`);
} catch (e) {
  console.error('   ❌ Error al crear ZIP:', e.message);
  process.exit(1);
}

console.log('\n🎉 ¡Tema empaquetado con éxito!');
console.log('   Rutas internas del ZIP usan "/" (compatible con Linux/Hostinger)');
console.log('   Sube murcianitos-child-final.zip a WordPress → Apariencia → Temas → Añadir nuevo');


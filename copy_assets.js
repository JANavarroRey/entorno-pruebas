const fs = require('fs');
const path = require('path');

const dest = 'c:\\Murcianitos\\web-redesign\\src\\assets\\';

const files = [
  'c:\\Murcianitos\\Contexto\\Identidad digital\\Pruebas contenido\\MOCKUPS LOGO\\metro.webp',
  'c:\\Murcianitos\\Contexto\\Identidad digital\\Pruebas contenido\\MOCKUPS LOGO\\cartel-gigante.webp',
  'c:\\Murcianitos\\Contexto\\Identidad digital\\Pruebas contenido\\MOCKUPS LOGO\\lona-2.webp'
];

files.forEach(f => {
  const name = path.basename(f).replace(/\s+/g, '_').toLowerCase();
  fs.copyFileSync(f, path.join(dest, name));
  console.log(`Copied ${name}`);
});

const fs = require('fs');
const path = require('path');

const dest = 'c:\\Murcianitos\\web-redesign\\src\\assets\\';

const files = [
  'c:\\Murcianitos\\Contexto\\Identidad digital\\Pruebas contenido\\MOCKUPS LOGO\\Metro.png',
  'c:\\Murcianitos\\Contexto\\Identidad digital\\Pruebas contenido\\MOCKUPS LOGO\\Cartel gigante.png',
  'c:\\Murcianitos\\Contexto\\Identidad digital\\Pruebas contenido\\MOCKUPS LOGO\\Lona 2.png'
];

files.forEach(f => {
  const name = path.basename(f).replace(/\s+/g, '_').toLowerCase();
  fs.copyFileSync(f, path.join(dest, name));
  console.log(`Copied ${name}`);
});

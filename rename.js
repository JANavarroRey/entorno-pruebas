const fs = require('fs');
fs.copyFileSync('comprar.html', 'pedir-ahora.html');
fs.copyFileSync('menu.html', 'carta.html');
console.log('Files copied successfully.');

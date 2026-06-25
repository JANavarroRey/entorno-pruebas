import { defineConfig } from 'vite';
import { resolve, parse } from 'path';
import fs from 'fs';

const htmlFiles = fs.readdirSync(__dirname)
  .filter(file => file.endsWith('.html'))
  .reduce((entries, file) => {
    const name = parse(file).name;
    entries[name] = resolve(__dirname, file);
    return entries;
  }, {});

export default defineConfig({
  base: '/entorno-pruebas/',
  server: {
    fs: {
      allow: ['..', '../..']
    }
  },
  build: {
    rollupOptions: {
      input: htmlFiles
    }
  }
});

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    fs: {
      allow: ['..', '../..']
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        carta: resolve(__dirname, 'carta.html'),
        'pedir-ahora': resolve(__dirname, 'pedir-ahora.html'),
        eventos: resolve(__dirname, 'eventos.html'),
        historia: resolve(__dirname, 'nuestra-historia.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        blog: resolve(__dirname, 'blog.html'),
        faq: resolve(__dirname, 'faq.html')
      }
    }
  }
});

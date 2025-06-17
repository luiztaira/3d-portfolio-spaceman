import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/3d/*',
          dest: '3d'
        },
        {
          src: 'public/parallax/*',
          dest: 'parallax'
        }
      ]
    })
  ],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  base: '/3d-portfolio-spaceman/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'three', '@react-three/fiber'],
        },
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});
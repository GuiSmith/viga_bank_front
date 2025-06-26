import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  base: '/viga_bank_front',
  resolve: {
    alias: {
      '@componentes': path.resolve(__dirname, 'src/componentes'),
      '@contextos': path.resolve(__dirname,'src/contextos'),
      '@servicos': path.resolve(__dirname, 'src/servicos'),
      '@paginas': path.resolve(__dirname, 'src/paginas'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@ui': path.resolve(__dirname, 'src/ui'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    }
  }
})

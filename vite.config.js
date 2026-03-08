import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      }
    })
  ],
  base: '/BluOf',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        credits: resolve(__dirname, 'credits.html'),
        about: resolve(__dirname, 'about.html')
      }
    }
  }
})

import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
console.log(process.env.TARGET)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: process.env.TARGET === 'lib'
    ? {
      lib: {
        entry: path.resolve(__dirname, 'lib/index.js'),
        name: 'XView',
        fileName: format => `xview.${format}.js`
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    } : {
      outDir: 'docs'
    }
})

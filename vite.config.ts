import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import {
  createStyleImportPlugin,
} from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createStyleImportPlugin({
    libs: [
      // If you don’t have the resolve you need, you can write it directly in the lib, or you can provide us with PR
      {
        libraryName: 'antd',
        esModule: false,
        resolveStyle: (name: string) => {
          return `antd/es/${name}/style/index`
        },
      },
    ]
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})










import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { chromeExtension } from 'rollup-plugin-chrome-extension'
import manifest from './manifest.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [chromeExtension({ manifest }), vue()],
})

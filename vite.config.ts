import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-panel-jffp.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
})

import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "university-of-nairobi-b3",
    project: "javascript-react",
    base: '/IPhone--Clone/'
  })],

  build: {
    sourcemap: true
  }
})
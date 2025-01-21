import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/IPhone--Clone/',
  plugins: [react(), sentryVitePlugin({
    org: "university-of-nairobi-b3",
    project: "javascript-react",
    telemetry: false,
  })],

  build: {
    sourcemap: true
  }
})
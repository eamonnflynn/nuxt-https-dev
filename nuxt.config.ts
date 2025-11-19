import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  $development: {
    routeRules: {
      '/api/**': {
        proxy: 'https://localhost:7238/**',
      }
    },
    devServer: {
      https: {
        key: 'dev-cert.key',
        cert: 'dev-cert.pem'
      }
    }
  },

})
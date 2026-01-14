// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
    }
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-01',

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    public: {}
  },

  nitro: {
    preset: process.env.NITRO_PRESET || 'netlify',
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      failOnError: false
    }
  },

  eslint: {
    config: {
      stylistic: false
    }
  }
});

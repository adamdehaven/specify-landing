import getSiteMeta from './utils/getSiteMeta'

const meta = getSiteMeta()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-generate#fallback
  generate: {
    fallback: true,
  },

  publicRuntimeConfig: {
    baseURL: process.env.NUXT_ENV_BASE_URL,
    siteName: process.env.NUXT_ENV_SITE_NAME,
    siteTitle: process.env.NUXT_ENV_SITE_TITLE,
    siteImage: process.env.NUXT_ENV_SITE_IMAGE,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.NUXT_ENV_SITE_TITLE,
    titleTemplate: `%s | ${process.env.NUXT_ENV_SITE_NAME}`,
    htmlAttrs: {
      lang: 'en',
      // class: ['has-navbar-fixed-top'],
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index,follow' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'application-name', content: process.env.NUXT_ENV_SITE_NAME },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'theme-color', content: '#003049' },
      { name: 'msapplication-TileColor', content: '#003049' },
      // SEO common tags
      { property: 'website', content: process.env.NUXT_ENV_BASE_URL },
      { hid: 'site_name', property: 'og:site_name', content: process.env.NUXT_ENV_SITE_NAME },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@adamdehaven' },
      { hid: 'twitter:creator', property: 'twitter:creator', content: '@adamdehaven' },
      { property: 'twitter:dnt', content: 'on' },
      { property: 'twitter:widgets:csp', content: 'on' },
      // SEO site tags
      ...meta,
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'mask-icon', color: '#003049', href: 'safari-pinned-tab.svg' },
      { name: 'msapplication-TileColor', content: '#003049' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400;1,600&family=Fira+Mono:wght@400;500;700&display=swap',
      },
      // override canonical URL on individual pages with hid
      { hid: 'canonical', rel: 'canonical', href: process.env.NUXT_ENV_BASE_URL },
    ],
    script: [
      {
        hid: 'google-tag-manager',
        innerHTML: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NUXT_ENV_GOOGLE_TAG_MANAGER_ID}');
        `,
      },
    ],
    noscript: [
      {
        hid: 'google-tag-manager-noscript',
        innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NUXT_ENV_GOOGLE_TAG_MANAGER_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        pbody: true,
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'google-tag-manager': ['innerHTML'],
      'google-tag-manager-noscript': ['innerHTML'],
    },
  },

  styleResources: {
    scss: ['~/assets/styles/inc/*.scss'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/app'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/router-guards.js', '~/plugins/vue-inline-svg.js', '~/plugins/vue-awesome.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/style-resources'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/dayjs',
    '@nuxtjs/sitemap',
  ],

  hooks: {
    'content:file:beforeInsert': async (document) => {
      if (document.extension === '.md') {
        // Add reading time to markdown files
        const { minutes, text } = require('reading-time')(document.text)
        document.readingTime = { minutes: Math.ceil(minutes), text }

        // Remove dates from post slugs
        // Post file name must be saved in format YYYY-MM-DD-post.md
        const regEx = /\d{4}-\d{2}-\d{2}/
        const mtc = regEx.exec(document.slug)
        if (mtc) {
          document.slug = document.slug.substr(11)
          document.path = document.dir + '/' + document.slug
        }
      }
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    fullTextSearchFields: ['title', 'description', 'slug', 'text'],
    markdown: {
      remarkPlugins: ['remark-gemoji'],
      remarkExternalLinks: {
        target: '_blank',
        rel: 'noopener',
      },
      remarkAutolinkHeadings: {
        linkProperties: {
          ariaHidden: 'true',
          tabIndex: -1,
          class: 'header-anchor',
        },
        // content: {
        //   type: 'text',
        //   value: '#',
        // },
      },
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },

    liveEdit: false,
  },

  // @nuxtjs/dayjs
  dayjs: {
    locales: ['en'],
    defaultLocale: 'en',
    plugins: ['utc', 'timezone', 'relativeTime'],
  },

  router: {
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active is-active-exact',
    trailingSlash: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    transpile: [/^vue-awesome/],
  },

  sitemap: {
    hostname: process.env.NUXT_ENV_BASE_URL || 'https://specify.dehaven.org',
    trailingSlash: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
    gzip: true,
  },
}

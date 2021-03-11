<template>
  <div class="page page-changelog">
    <section class="section is-fullwidth-container is-small has-background-white">
      <div class="container">
        <div class="is-row is-vcentered changelog-header">
          <div class="is-col has-text-left-tablet">
            <h1 class="is-marginless has-text-black">Changelog</h1>
            <p class="mt-5">View the update history by version.</p>
          </div>
          <div class="is-col">
            <figure class="image changelog-header-image">
              <inline-svg :src="require('~/assets/images/undraw_developer_activity.svg')"></inline-svg>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="is-row">
          <div class="is-col">
            <div class="box">
              <ul v-if="changelog" class="details">
                <li v-for="release in changelog" :key="release.slug">
                  <p>
                    <span class="release-version">{{ release.slug }}</span>
                    <span class="release-date">{{ $dayjs(release.date).format('MMMM DD, YYYY') }}</span>
                  </p>
                  <ul v-if="release.details">
                    <li v-for="(item, i) in release.details" :key="release.slug.replace(/\./g, '') + '-details-' + i">
                      {{ item }}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <InstallCTASection :version="1"></InstallCTASection>
  </div>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta'
import getStructuredData from '~/utils/getStructuredData'
import { mapMutations } from 'vuex'

export default {
  name: 'Changelog',
  async asyncData({ $content, params, error }) {
    const changelog = await $content('data/changelog').only(['slug', 'date', 'details']).fetch()

    if (!changelog) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    return { changelog }
  },
  computed: {
    meta() {
      return getSiteMeta({
        title: 'Changelog',
        description: 'The changelog of the Specify extension for Adobe Illustrator.',
        url: this.$config.baseURL + this.$route.path,
        image: '/images/specify-for-adobe-illustrator.png',
      })
    },
  },
  head() {
    return {
      title: 'Changelog',
      link: [{ hid: 'canonical', rel: 'canonical', href: this.$config.baseURL + this.$route.path }],
      meta: [...this.meta],
      script: [
        getStructuredData({
          type: 'changelog',
          title: 'Changelog',
          description: 'The changelog of the Specify extension for Adobe Illustrator.',
          url: this.$config.baseURL + this.$route.path,
          image: '/images/specify-for-adobe-illustrator.png',
        }),
      ],
    }
  },
  mounted() {
    if (process.client) {
      this.setNavbarCanBeTransparent(false)
    }
  },
  methods: {
    ...mapMutations({
      setNavbarCanBeTransparent: 'navbar/setNavbarCanBeTransparent',
    }),
  },
}
</script>

<style lang="scss">
.page-changelog {
  .changelog-header {
    @media ($under-tablet) {
      display: flex;
      flex-flow: column-reverse;
    }

    h1 {
      font-size: 3rem;
      margin-top: 2rem;

      @media ($tablet) {
        font-size: 3.6rem;
        margin: 0;
      }
    }
  }

  .changelog-header-image {
    max-width: 360px;
    margin: 0 auto;
  }

  ul.details {
    list-style: none;
    margin: 0;

    > li:not(:last-of-type) {
      margin-bottom: 3rem;
      padding-bottom: 3rem;
      border-bottom: 1px solid $gray-light;
      font-size: 1.4rem;

      @media ($mobile-narrow) {
        font-size: 1.6rem;
      }

      > ul {
        list-style: disc;
      }
    }
  }

  .release-version {
    display: inline-block;
    @include unselectable;
    padding: 0.5rem 2rem;
    background-color: $gray-light;
    border-radius: $radius;
    margin-right: 1rem;
    font-weight: 600;
  }
}
</style>

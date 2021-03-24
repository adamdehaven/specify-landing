<template>
  <section class="section section-install-cta is-fullwidth-container has-background-white">
    <div class="container">
      <div class="is-row is-hidden-mobile is-hidden-tablet-wide is-hidden-desktop">
        <div class="is-col">
          <figure class="image cta-image">
            <inline-svg v-if="version === 2" :src="require('~/assets/images/undraw_celebration.svg')"></inline-svg>
            <inline-svg v-else :src="require('~/assets/images/undraw_time_management.svg')"></inline-svg>
          </figure>
        </div>
      </div>
      <div class="is-row is-vcentered">
        <div class="is-col is-narrow is-hidden-tablet">
          <figure class="image cta-image">
            <inline-svg v-if="version === 2" :src="require('~/assets/images/undraw_celebration.svg')"></inline-svg>
            <inline-svg v-else :src="require('~/assets/images/undraw_time_management.svg')"></inline-svg>
          </figure>
        </div>
        <div class="is-col has-text-left-tablet cta-tagline">
          <h4 v-if="version === 2">Ready to start adding measurements the easy&nbsp;way?</h4>
          <h4 v-else>Save time and add dimensions with the click of a&nbsp;button!</h4>
        </div>
        <div class="is-col has-text-right-tablet">
          <a
            class="button is-large is-blue mb-1 specify-install-cta"
            href="https://exchange.adobe.com/creativecloud.details.106345.html"
            rel="noopener"
            target="_blank"
          >
            <span class="icon">
              <img src="~assets/images/specify-icon-white.svg" alt="Install Specify extension for Adobe Illustrator" />
            </span>
            <span>Install Specify</span>
          </a>
          <p class="has-text-gray is-marginless">
            <small>Only $11.99/year</small>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InstallCTASection',
  props: {
    version: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style lang="scss">
.section-install-cta {
  .cta-tagline {
    @media ($tablet) {
      margin-left: 1rem;
    }
  }

  .cta-image {
    max-width: 260px;
    margin: 0 auto;
  }
}
</style>

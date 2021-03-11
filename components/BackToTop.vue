<template>
  <transition name="fade" mode="in-out">
    <button
      v-if="show"
      ref="goToTop"
      @click.prevent="scrollToTop"
      class="button is-black is-small go-to-top"
      title="Back to top"
    >
      <span class="icon">
        <v-icon name="arrow-up" scale="1.25"></v-icon>
      </span>
    </button>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex'
import debounce from 'lodash.debounce'

export default {
  name: 'BackToTop',
  props: {
    threshold: {
      type: Number,
      default: 300,
    },
  },
  data() {
    return {
      scrollTop: null,
    }
  },
  computed: {
    show() {
      return this.scrollTop > this.threshold
    },
  },
  mounted() {
    this.scrollTop = this.getScrollTop()
    window.addEventListener(
      'scroll',
      debounce(() => {
        this.scrollTop = this.getScrollTop()
      }, 100),
    )
  },
  methods: {
    getScrollTop() {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    },
    async scrollToTop() {
      // Close mobile menu
      this.setMobileMenuActive(false)
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.scrollTop = 0
    },
    ...mapMutations({
      setMobileMenuActive: 'navbar/setMobileMenuActive',
    }),
  },
}
</script>

<style lang="scss">
.go-to-top {
  position: fixed;
  bottom: 1rem;
  right: 2rem;
  z-index: 1;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  border-radius: $radius-rounded !important;
  box-shadow: $box-shadow;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  border: 2px solid $white !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

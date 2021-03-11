<template>
  <nav
    ref="navbar"
    class="navbar is-fixed-top"
    :class="{
      'is-black': !canBeTransparent || !isTransparent || mobileMenuIsActive,
      'is-transparent': isTransparent && canBeTransparent && !mobileMenuIsActive,
    }"
  >
    <div class="container">
      <div class="navbar-brand">
        <NuxtLink class="navbar-item is-unselectable site-logo" to="/" exact>
          <img
            v-if="!isTransparent || mobileMenuIsActive"
            src="~assets/images/specify-logo-white.svg"
            alt="Specify dimensions Adobe Illustrator"
          />
          <img v-else src="~assets/images/specify-logo-dark.svg" alt="Specify dimensions Adobe Illustrator" />
        </NuxtLink>
        <div class="navbar-item is-hidden-tablet is-hidden-tablet-wide is-hidden-desktop ml-auto">
          <a
            class="button is-blue is-rounded specify-install-cta"
            href="https://exchange.adobe.com/creativecloud.details.104123.specify.html"
            target="_blank"
            rel="noopener"
          >
            <span class="icon">
              <img src="~assets/images/specify-icon-white.svg" alt="Install Specify extension for Adobe Illustrator" />
            </span>
            <span>Install Now</span>
          </a>
        </div>
        <div
          class="navbar-burger ml-0"
          data-target="main-nav"
          :class="{ 'is-active': mobileMenuIsActive }"
          @click.prevent="setMobileMenuActive(!mobileMenuIsActive)"
        >
          <span :class="{ 'has-background-white': !isTransparent || mobileMenuIsActive }"></span>
          <span :class="{ 'has-background-white': !isTransparent || mobileMenuIsActive }"></span>
          <span :class="{ 'has-background-white': !isTransparent || mobileMenuIsActive }"></span>
        </div>
      </div>

      <div id="main-nav" class="navbar-menu" :class="{ 'is-active': mobileMenuIsActive }">
        <div class="navbar-start">
          <NuxtLink to="/#features" class="navbar-item" @click.native="setMobileMenuActive(false)">Features</NuxtLink>
          <NuxtLink to="/#options" class="navbar-item" @click.native="setMobileMenuActive(false)">Options</NuxtLink>
          <NuxtLink to="/#docs" class="navbar-item" @click.native="setMobileMenuActive(false)">Docs</NuxtLink>
          <NuxtLink to="/#support" class="navbar-item" @click.native="setMobileMenuActive(false)">Support</NuxtLink>
        </div>

        <div class="navbar-end">
          <div class="navbar-item is-hidden-mobile">
            <a
              class="button is-blue is-rounded specify-install-cta"
              :class="{ 'is-large': !!isTransparent && !mobileMenuIsActive }"
              href="https://exchange.adobe.com/creativecloud.details.104123.specify.html"
              rel="noopener"
              target="_blank"
            >
              <span class="icon">
                <img
                  src="~assets/images/specify-icon-white.svg"
                  alt="Install Specify extension for Adobe Illustrator"
                />
              </span>
              <span>Install Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'
import debounce from 'lodash.debounce'

export default {
  name: 'Navbar',
  data() {
    return {
      navbarHeight: 70,
    }
  },
  computed: {
    canBeTransparent() {
      return this.$store.state.navbar.canBeTransparent
    },
    isTransparent() {
      return this.$store.state.navbar.isTransparent
    },
    transparentOffset() {
      return this.$store.state.navbar.transparentOffset
    },
    componentTransparentNavbarOffset() {
      if (window && window.innerHeight && (!this.transparentOffset || this.transparentOffset === 0)) {
        return window.innerHeight - this.navbarHeight
      }

      return this.transparentOffset - this.navbarHeight
    },
    mobileMenuIsActive() {
      return this.$store.state.navbar.mobileMenuIsActive
    },
  },
  watch: {
    $route: {
      handler(route) {
        if (process.client) {
          // Close mobile menu on route change
          this.setMobileMenuActive(false)

          this.updateNavbarTransparencyOffset(route)
          this.detectTransparentNavbarOffset()
        }
      },
      deep: true,
    },
  },
  mounted() {
    if (process.client) {
      this.updateNavbarTransparencyOffset(this.$route)
      this.detectTransparentNavbarOffset()
      window.addEventListener('scroll', this.detectTransparentNavbarOffset)
      window.scrollBy(0, -1)
      window.addEventListener('resize', this.onResize)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('scroll', this.detectTransparentNavbarOffset)
  },
  methods: {
    detectTransparentNavbarOffset: debounce(function () {
      const mediaQuery = window.matchMedia('(max-width: 768px)')
      if (mediaQuery.matches) {
        this.setNavbarIsTransparent(false)
      } else {
        this.setNavbarIsTransparent(
          !!this.canBeTransparent && window.pageYOffset < this.componentTransparentNavbarOffset,
        )
      }
    }, 200),
    updateNavbarTransparencyOffset(route) {
      // Set default transparency offset
      let offset = this.navbarHeight * 2
      this.setNavbarTransparencyOffset(offset)
    },
    onResize: debounce(function () {
      // Close mobile menu on resize
      this.setMobileMenuActive(false)

      const mediaQuery = window.matchMedia('(max-width: 768px)')
      if (mediaQuery.matches) {
        this.setNavbarIsTransparent(false)
      }
    }, 200),
    ...mapMutations({
      setNavbarTransparencyOffset: 'navbar/setOffset',
      setNavbarIsTransparent: 'navbar/setNavbarIsTransparent',
      setMobileMenuActive: 'navbar/setMobileMenuActive',
    }),
  },
}
</script>

<style lang="scss">
.navbar {
  height: $navbar-height;
  transition: all 0.1s ease-in-out;

  @media ($tablet) {
    height: $navbar-height * 2;
  }

  .navbar-item {
    &:focus {
      background-color: transparent !important;
    }
  }

  // Navbar not transparent
  &:not(.is-transparent) {
    height: $navbar-height !important;
    box-shadow: $box-shadow;
    border-bottom: 1px solid $white;

    .site-logo {
      > img {
        height: 3rem;

        @media (min-width: 380px) {
          height: 4rem;
        }

        @media ($tablet) {
          height: 4.5rem;
        }
      }
    }

    .navbar-item {
      @media ($tablet) {
        &.is-active,
        &:hover,
        &:focus,
        &:active {
          border-bottom: 1px solid $white;
        }
      }
    }
  }

  .site-logo {
    background-color: transparent !important;

    > img {
      width: auto;
      max-height: none;
      height: 3rem;

      @media (min-width: 380px) {
        height: 4rem;
      }

      @media ($tablet) {
        height: 5.5rem;
      }

      @media ($tablet-wide) {
        height: 6rem;
      }
    }
  }

  .navbar-burger {
    span {
      height: 2px;
    }

    &:focus,
    &:hover {
      background-color: transparent;
    }
  }

  .navbar-item {
    color: $black;
    font-size: 1.8rem;
    font-weight: 400;
    transition: all 0.2s ease-in-out;
    border-bottom: 1px solid transparent;

    @media ($tablet) {
      padding: 0.5rem 1.5rem;
    }
  }

  .button .icon > img {
    margin-right: 0.25rem !important;
  }

  // Mobile menu
  @media ($under-tablet) {
    .navbar-menu {
      border-bottom: 1px solid $white;
      background-color: darken($black, 6%);
      box-shadow: $box-shadow;

      .navbar-item {
        color: $white;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;

        &:not(:last-of-type) {
          border-bottom: 1px solid $white;
        }
      }
    }
  }
}
</style>

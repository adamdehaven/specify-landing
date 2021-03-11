<template>
  <footer class="footer">
    <div class="container">
      <div class="is-row is-vcentered">
        <div class="is-col footer-left">
          <figure class="image footer-logo">
            <img src="~assets/images/specify-logo-white.svg" alt="Specify dimensions Adobe Illustrator" />
          </figure>
        </div>
        <div class="is-col footer-right">
          <p class="copyright is-unselectable">
            Copyright &copy; {{ copyrightYears }} <br /><a href="https://www.adamdehaven.com/" target="_blank"
              >Adam DeHaven</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    copyrightYears() {
      return '2016' + '-' + this.$dayjs().year()
    },
  },
}
</script>

<style lang="scss">
$footer-text-color: rgba($white, 0.3);

.footer {
  color: $footer-text-color;
  background-color: $black;
  border-top: 1px solid $footer-text-color;
  margin: 0;
  padding: 3rem 1.5rem;
  font-size: 1.2rem;

  a {
    color: $footer-text-color;
    text-decoration: underline;
  }

  .footer-left {
    text-align: center;

    @media ($tablet) {
      text-align: left;
    }
  }

  .footer-right {
    text-align: center;

    @media ($tablet) {
      text-align: right;
    }
  }

  .footer-logo {
    width: 16rem;
    opacity: 0.2;
    margin: 0 auto 2rem;

    @media ($tablet) {
      margin: 0;
    }
  }

  .copyright br {
    @media (min-width: 380px) {
      display: none;
    }
  }
}
</style>

<template>
  <div class="page page-homepage">
    <section class="section-hero is-fullwidth-container">
      <div class="section-hero-bg"></div>
      <div class="section-hero-body">
        <div class="section-hero-content">
          <div class="is-row is-centered is-vcentered mb-6">
            <div class="is-col is-three-quarters-tablet">
              <h1 class="title is-unselectable">Specify dimensions for Adobe&nbsp;Illustrator</h1>
              <h2 class="subtitle is-unselectable">
                Automate adding dimension lines and measurements
                <br class="is-hidden-mobile is-hidden-tablet is-hidden-tablet-wide" />to your Adobe Illustrator artwork
                with an&nbsp;extension
              </h2>
              <div class="buttons is-centered">
                <a href="#features" class="button is-black is-large">View Features</a>
                <a
                  href="https://exchange.adobe.com/creativecloud.details.106345.html"
                  class="button is-blue is-large specify-install-cta"
                  rel="noopener"
                  target="_blank"
                >
                  <span class="icon">
                    <img
                      src="~assets/images/specify-icon-white.svg"
                      alt="Install Specify extension for Adobe Illustrator"
                    />
                  </span>
                  <span>Install Specify</span></a
                >
              </div>
            </div>
          </div>
          <div class="is-row is-centered is-vcentered">
            <div class="is-col is-full-mobile is-half-desktop">
              <figure class="image laptop-image">
                <img src="~/assets/images/specify-example.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="features" class="section section-feature-overview is-fullwidth-container has-background-black">
      <div class="container">
        <div class="is-row is-vcentered is-stacked-under-desktop is-hidden-mobile is-hidden-tablet">
          <div class="is-col">
            <figure class="image">
              <inline-svg :src="require('~/assets/images/undraw_responsive.svg')"></inline-svg>
            </figure>
          </div>
          <div class="is-col">
            <figure class="image">
              <inline-svg :src="require('~/assets/images/undraw_control_panel1.svg')"></inline-svg>
            </figure>
          </div>
          <div class="is-col">
            <figure class="image">
              <inline-svg :src="require('~/assets/images/undraw_real-time_sync.svg')"></inline-svg>
            </figure>
          </div>
        </div>
        <div class="is-row is-stacked-under-desktop">
          <div class="is-col has-text-white has-text-centered">
            <figure class="image is-hidden-tablet-wide is-hidden-desktop">
              <inline-svg :src="require('~/assets/images/undraw_responsive.svg')"></inline-svg>
            </figure>
            <h3 class="has-text-white">Add Dimension Lines &amp; Measurement&nbsp;Labels</h3>
            <p>
              Easily add dimension lines and measurements to any object on your Illustrator artboard, even based on a
              custom&nbsp;scale.
            </p>
          </div>
          <div class="is-col has-text-white has-text-centered">
            <figure class="image is-hidden-tablet-wide is-hidden-desktop">
              <inline-svg :src="require('~/assets/images/undraw_control_panel1.svg')"></inline-svg>
            </figure>
            <h3 class="has-text-white">Customizable &amp; Persistent&nbsp;Settings</h3>
            <p>
              Completely customize the label styles and dimension lines of all&nbsp;measurements. Settings will persist
              even after closing the&nbsp;application!
            </p>
          </div>
          <div class="is-col has-text-white has-text-centered">
            <figure class="image is-hidden-tablet-wide is-hidden-desktop">
              <inline-svg :src="require('~/assets/images/undraw_real-time_sync.svg')"></inline-svg>
            </figure>
            <h3 class="has-text-white">Dimension Single or Multiple&nbsp;Objects</h3>
            <p>
              You can dimension the distance between multiple objects, or get the length of their individual&nbsp;sides.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="options" class="section section-features is-fullwidth-container">
      <div class="container">
        <div class="is-row is-vcentered">
          <div class="is-col">
            <h3>Options Panel</h3>
            <p class="is-callout-text">
              The Options Panel allows the user to select the side(s) of the object(s) to dimension, whether to
              dimension the object itself or between objects, and the scale of the artwork.
            </p>
            <ul class="is-callout-text">
              <li>Choose which dimension(s) to specify</li>
              <li>
                With multiple objects selected, choose to dimension between the two objects instead of their individual
                sides
              </li>
              <li>Define a custom scale</li>
              <li>Choose to use decimals or fractions for measurements, when applicable.</li>
              <li>Choose whether to lock the <b>SPEC</b> layer after adding the&nbsp;dimensions</li>
            </ul>
          </div>
          <div class="is-col">
            <figure class="image">
              <img
                src="~/assets/images/specify-options-panel.png"
                alt="Specify extension options panel for dimensioning measurements"
              />
            </figure>
          </div>
        </div>
        <div class="is-row is-vcentered">
          <div class="is-col">
            <figure class="image">
              <img
                src="~/assets/images/specify-styles-panel.png"
                alt="Specify extension styles panel for dimensioning measurements"
              />
            </figure>
          </div>
          <div class="is-col">
            <h3>Styles Panel</h3>
            <p class="is-callout-text">
              The Styles Panel allows the user to completely customize the label styles and the line styles for all
              dimensions.
            </p>
            <ul class="is-callout-text">
              <li>Include units in the label</li>
              <li>Customize the unit text</li>
              <li>Decimal places in measurements</li>
              <li>Font family</li>
              <li>Font size</li>
              <li>Label color</li>
              <li>Label gap</li>
              <li>Stroke width</li>
              <li>Head &amp; tail length</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <InstallCTASection :version="1"></InstallCTASection>

    <section id="docs" class="section section-documentation has-background-black is-fullwidth-container">
      <div class="container">
        <div class="box">
          <div class="is-row is-vcentered mb-6">
            <div class="is-col">
              <h2>Documentation</h2>
            </div>
            <div class="is-col">
              <figure class="image documentation-image">
                <inline-svg :src="require('~/assets/images/undraw_redesign_feedback.svg')"></inline-svg>
              </figure>
            </div>
          </div>

          <div class="is-row">
            <div class="is-col">
              <p class="is-callout-text">
                <a
                  href="https://exchange.adobe.com/creativecloud.details.106345.html"
                  class="specify-install-cta"
                  target="_blank"
                  rel="noopener"
                  >Specify</a
                >
                is an Adobe Illustrator extension used to automate specifying dimension measurements (and adding
                dimension lines) for single or multiple objects on your artboard, as well as specifying the dimensions
                between two objects.
              </p>

              <h3>Installation</h3>
              <p>
                Simply
                <a
                  href="https://exchange.adobe.com/creativecloud.details.106345.html"
                  class="specify-install-cta"
                  target="_blank"
                  rel="noopener"
                  >download the Specify extension from Adobe Exchange</a
                >.
              </p>
              <div class="box is-small has-background-orange">
                <p>
                  <b>Note</b>: If you receive an error that the extension is not compatible with your installed version
                  of Adobe Illustrator, or if the extension becomes incompatible after an Adobe update, navigate to
                  "Manage Plugins" within the Creative Cloud desktop application. Uninstall the Specify extension, and
                  then simply re-install the extension.
                </p>
              </div>

              <h3>Usage</h3>
              <p>
                To run the extension, first select one or more objects in your open Illustrator document. You must have
                at least one object selected via Illustrator's Selection Tool <kbd>V</kbd> or Direct Selection Tool
                <kbd>A</kbd>.
              </p>
              <p>
                After installing the Specify extension from Adobe Exchange, simply navigate to
                <code>Window > Extensions > Specify</code> to get started. Run the extension by simply clicking the
                "Specify Object(s)" button in the extension panel.
              </p>

              <h4>Options and Styles</h4>
              <p>
                When the extension initializes, you will be presented with a dialog that allows you to choose which
                dimension(s) of your object(s) you would like to specify. The dialog also allows for the customization
                of several options.
              </p>
              <p>
                Any changes to the settings defined in the Specify Dialog (including both the Options Panel and the
                Styles Panel) will persist even after closing the Adobe Illustrator application (version
                <code>3.2.0</code> and newer).
              </p>
              <p>
                After configuring your desired settings, make sure to select which dimension(s) to dimension, and then
                simply click the "Specify Object(s)" button at the bottom right of the dialog. Specify will quickly
                output all selected dimensions onto a new <b>SPEC</b> layer, and then lock the layer to prevent
                accidental edits.
              </p>

              <h4>SPEC Layer</h4>
              <p>
                You are free to unlock the <b>SPEC</b> layer and edit as needed. You may change the color of individual
                dimension labels, adjust the placement of dimension groups, or even remove dimensions you no longer
                need.
              </p>
              <p>If you make a mistake, no problem! Simply select the desired objects and run the extension again.</p>

              <h3>Options Panel</h3>
              <p>
                The Options Panel allows the user to select the side(s) of the object(s) to dimension, whether to
                dimension the object itself or between objects, and the scale of the artwork.
              </p>

              <h4>Dimensions</h4>
              <p>
                The options panel allows you to first choose which dimension(s) of your Illustrator object you would
                like to specify. You may choose top, right, bottom, left, or any combination of sides.
              </p>

              <h4>Multiple Objects</h4>
              <p>
                If exactly two objects are selected on your artboard, you will be given the option to dimension between
                the two objects, instead of their individual sides. When checked, this option will specify the selected
                dimension(s) between the two chosen objects.
              </p>

              <h4>Scale</h4>
              <p>
                You may define a custom scale for your artwork, which will apply a multiplier to the displayed units
                label.
              </p>
              <p>
                For example, if you are designing an engineering drawing at 1/4 scale (or 1:4), you simply choose this
                ratio from the <b>Scale</b> dropdown menu, and then optionally enable the checkbox for Custom Units
                Texton the Styles Panel that corresponds to the unit labels you would like to output. In this example,
                choosing '1/4' will indicate the artwork is drawn at one-fourth scale, resulting in dimension values
                that are 4 times their drawn dimensions.
              </p>

              <h4>Decimals or Fractions</h4>
              <p>You may choose to use decimals or fractions for measurements that contain non-whole-numbers.</p>
              <p>
                If you choose <b>Decimals</b>, you can specify how many decimal places to use for the measurement (0-5
                decimal places). Default is 2.
              </p>
              <p>
                If you choose to use <b>Fractions</b> you can specify the maximum denominator number to use. This
                setting will impact the rounding algorithm. Default is 64. You may also choose whether to include a dash
                - between the whole number and the fraction. With this setting enabled, the measurement
                <code>1 3/4</code> is displayed as <code>1-3/4</code>.
              </p>

              <h4>SPEC Layer</h4>
              <p>Choose whether to lock the SPEC layer after adding the dimensions.</p>

              <h3>Styles Panel</h3>
              <p>
                The Styles Panel allows the user to completely customize the label styles and the line styles for all
                dimensions.
              </p>

              <h4>Include Units in Label</h4>
              <p>When checked, inserts the units in the label alongside the dimension measurement.</p>
              <p>
                The extension automatically dimensions objects based on the Document's default units. To dimension in
                different units (i.e. Inches, Centimeters, etc.), first, select show Rulers via `View > Rulers > Show
                Rulers` ( <kbd>⌘Cmd</kbd> + <kbd>R</kbd> on Mac, <kbd>Ctrl</kbd> + <kbd>R</kbd> on PC ).
              </p>
              <p>
                Next, right-click on the Ruler, and select your desired units. Otherwise, the extension will use the
                Document's selected units by default.
              </p>

              <h4>Custom Units Text</h4>
              <p>
                When checked, allows the user to customize the text of the units label. For example, displaying the
                abbreviation for feet, "ft" instead of the ruler measurement unit.
              </p>

              <h4>Decimals</h4>
              <p>
                Set the desired number of decimal places to display after the decimal point in the label dimensions.
              </p>

              <h4>Font Family</h4>
              <p>Set the desired font family for the dimension label(s). Default is &quot;Tahoma&quot;.</p>

              <h4>Font Size</h4>
              <p>
                Set the desired font size for the dimension label(s). If the value is less than one (e.g. 0.25) you must
                include a leading zero before the decimal point.
              </p>

              <h4>Color</h4>
              <p>Click to select the color for the dimension label(s).</p>

              <h4>Gap</h4>
              <p>Set the size of the desired gap between the dimension label(s) and the object.</p>

              <h4>Stroke Width</h4>
              <p>Set the desired stroke width of the dimension line.</p>

              <h4>Head &amp; Tail Length</h4>
              <p>Set the desired length of the line at both ends of the dimension line.</p>

              <h3>Reset Options</h3>
              <p>
                At the bottom left of the Specify dialog is a Reset button that restores all defaults in both the
                Options Panel and the Styles panel.
              </p>

              <h3>Changelog</h3>
              <p>View the <NuxtLink to="/changelog">changelog</NuxtLink></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <InstallCTASection :version="2"></InstallCTASection>

    <section class="section is-fullwidth-container has-background-black has-text-centered">
      <div class="container">
        <h2 id="support" class="has-text-white">Support</h2>
        <div class="is-row">
          <div class="is-col has-text-white has-text-centered">
            <p>Do you have questions? Would you like to contribute? Something else?</p>
            <div class="buttons is-centered">
              <a
                class="button is-white is-outlined"
                href="https://github.com/adamdehaven/specify/issues/new/choose"
                target="_blank"
                rel="noopener"
              >
                <span class="icon">
                  <v-icon name="brands/github"></v-icon>
                </span>
                <span>Create an issue</span>
              </a>
              <a class="button is-white" href="https://github.com/adamdehaven/specify" target="_blank" rel="noopener">
                <span class="icon">
                  <v-icon name="brands/github"></v-icon>
                </span>
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <!-- <br /> -->
        <div class="is-row">
          <div class="is-col has-text-white has-text-centered">
            <p class="mt-4">
              <small
                >Not into looking at code? No worries. <br />Reach out on Twitter&nbsp;<a
                  href="https://twitter.com/adamdehaven"
                  target="_blank"
                  rel="noopener"
                  >@adamdehaven</a
                ></small
              >
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta'
import getStructuredData from '~/utils/getStructuredData'
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  computed: {
    meta() {
      return getSiteMeta({
        title: `${this.$config.siteName} | ${this.$config.siteTitle}`,
        description:
          'Specify is an Adobe Illustrator extension to automate specifying dimension measurements of single or multiple objects, and specifying the dimensions between two objects.',
        url: this.$config.baseURL + this.$route.path,
        image: '/images/specify-for-adobe-illustrator.png',
      })
    },
  },
  head() {
    return {
      title: `${this.$config.siteTitle}`,
      link: [{ hid: 'canonical', rel: 'canonical', href: this.$config.baseURL + this.$route.path }],
      meta: [...this.meta],
      script: [
        getStructuredData({
          type: 'homepage',
          title: `${this.$config.siteName} | ${this.$config.siteTitle}`,
          description:
            'Specify is an Adobe Illustrator extension to automate specifying dimension measurements of single or multiple objects, and specifying the dimensions between two objects.',
          url: this.$config.baseURL + this.$route.path,
          image: '/images/specify-for-adobe-illustrator.png',
        }),
      ],
    }
  },
  mounted() {
    if (process.client) {
      this.setNavbarCanBeTransparent(true)
      this.setNavbarIsTransparent(true)
    }
  },
  methods: {
    ...mapMutations({
      setNavbarCanBeTransparent: 'navbar/setNavbarCanBeTransparent',
      setNavbarIsTransparent: 'navbar/setNavbarIsTransparent',
    }),
  },
}
</script>

<style lang="scss">
.page-homepage {
  .section-hero {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: space-between;

    .section-hero-body {
      position: relative;
      display: flex;
      align-items: center;
      flex-grow: 1;
      flex-shrink: 0;
      padding: 3rem 2rem 0;
      z-index: 1;

      @media ($tablet) {
        padding: 9rem 4.5rem 0;
      }

      .section-hero-content {
        width: 100%;

        .buttons .button {
          min-width: 18rem;
        }
      }

      .title,
      .subtitle {
        color: $black;
        text-align: center;
      }

      .title {
        font-size: 2.8rem;

        @media ($tablet) {
          font-size: 3.2rem;
        }
      }

      .subtitle {
        line-height: 1.4;
        font-size: 1.8rem;
        font-weight: 400;

        @media ($mobile-narrow) {
          font-size: 2rem;
        }

        @media ($tablet) {
          font-size: 2.6rem;
        }
      }

      .laptop-image {
        margin-bottom: -1.75rem;

        @media ($tablet) {
          margin-bottom: -2.5rem;
        }

        @media ($desktop) {
          margin-bottom: -4rem;
        }
      }
    }
  }

  .section-feature-overview {
    h3 {
      @media ($under-mobile-narrow) {
        font-size: 2rem;
      }

      @media ($tablet-wide) and ($under-desktop) {
        font-size: 2.4rem;
      }
    }

    .image {
      &.is-hidden-tablet {
        margin-top: 6rem;

        @media ($tablet) {
          margin-top: 0;
        }
      }

      > svg {
        width: 100%;
        height: auto;
        margin: 0 auto;

        @media ($mobile-narrow) {
          width: 80%;
        }

        @media ($tablet) and ($under-tablet-wide) {
          width: 100%;
        }

        @media ($desktop) {
          width: 60%;
        }
      }
    }

    .is-stacked-under-desktop {
      @media ($under-tablet-wide) {
        display: block;
        margin: 6rem auto;
        max-width: 60rem;

        .is-col {
          &:not(:last-of-type) {
            margin-bottom: 6rem;
          }
        }
      }
    }
  }

  .section-features {
    > .container > .is-row {
      margin-top: 6rem;
      margin-bottom: 6rem;

      &:first-of-type {
        @media ($under-tablet) {
          display: flex;
          flex-flow: column-reverse;
        }
      }
    }

    .image {
      margin-bottom: 3rem;

      @media ($tablet) {
        margin-bottom: 0;
      }

      img {
        max-width: 400px;
        margin: auto;
      }
    }
  }

  .section-documentation {
    h3 {
      margin: 4rem 0 1.5rem;

      &:not(:first-of-type) {
        padding-top: 3rem;
        border-top: 1px solid $border-color;
      }
    }

    h4 {
      color: darken($gray, 10%);
      font-size: 2rem;
      margin: 3rem 0 1.5rem;
    }

    .documentation-image {
      max-width: 30rem;
      margin: auto;

      svg {
        max-width: 100%;
        height: auto;
        margin: 0 auto;
      }
    }
  }
}
</style>

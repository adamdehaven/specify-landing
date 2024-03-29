<template>
  <component
    :is="isAbbreviation ? 'abbr' : 'span'"
    :data-label="labelText"
    :aria-label="labelText"
    role="tooltip"
    :class="[
      hasPosition,
      hasSize,
      {
        'vue-custom-tooltip': isActive && labelText,
        'is-sticky': isSticky,
        'has-multiline': isMultiline,
        'is-underlined': isUnderlined || isAbbreviation,
      },
    ]"
    :style="[{ cursor: isAbbreviation ? 'help' : 'pointer' }]"
  >
    <slot name="default"></slot>
  </component>
</template>

<script>
export default {
  name: 'BaseTooltip',
  props: {
    label: String,
    active: {
      type: Boolean,
      default: true,
    },
    sticky: Boolean, // Always showing
    multiline: Boolean, // Multiple lines
    underlined: Boolean,
    abbreviation: Boolean,
    position: {
      type: String,
      default: 'is-top',
      validator(value) {
        return ['is-top', 'is-bottom', 'is-left', 'is-right'].indexOf(value) > -1
      },
    },
    size: {
      type: String,
      default: 'is-medium',
      validator(value) {
        return ['is-small', 'is-medium', 'is-large'].indexOf(value) > -1
      },
    },
  },
  data() {
    return {
      labelText: this.label || null,
      isActive: this.active || true,
      isSticky: this.sticky || false,
      isMultiline: this.multiline || false,
      isUnderlined: this.underlined || false,
      isAbbreviation: this.abbreviation || false,
      hasPosition: this.position || 'is-top',
      hasSize: this.size || 'is-medium',
    }
  },
  watch: {
    label: {
      handler(value) {
        this.labelText = value
      },
      immediate: true,
    },
    active: {
      handler(value) {
        this.isActive = value
      },
      immediate: true,
    },
    sticky: {
      handler(value) {
        this.isSticky = value
      },
      immediate: true,
    },
    multiline: {
      handler(value) {
        this.isMultiline = value
      },
      immediate: true,
    },
    underlined: {
      handler(value) {
        this.isUnderlined = value
      },
      immediate: true,
    },
    abbreviation: {
      handler(value) {
        this.isAbbreviation = value
      },
      immediate: true,
    },
    position: {
      handler(value) {
        this.hasposition = value
      },
      immediate: true,
    },
    size: {
      handler(value) {
        this.hasSize = value
      },
      immediate: true,
    },
  },
}
</script>

<style lang="scss">
$tooltip-color: $white; // default color
$tooltip-background: $black; // default background color
$tooltip-radius: $radius-large; // default border radius
$weight-normal: 400; // default font weight
$speed: 86ms;
$easing: ease-out;

@mixin tooltip-arrow($direction, $color) {
  @if ($direction == 'is-top') {
    border-top: 5px solid #000; // default for IE
    border-top: 5px solid $color;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    bottom: calc(100% + 2px);
  } @else if ($direction == 'is-bottom') {
    border-right: 5px solid transparent;
    border-bottom: 5px solid #000; // default for IE
    border-bottom: 5px solid $color;
    border-left: 5px solid transparent;
    top: calc(100% + 2px);
  } @else if ($direction == 'is-right') {
    border-top: 5px solid transparent;
    border-right: 5px solid #000; // default for IE
    border-right: 5px solid $color;
    border-bottom: 5px solid transparent;
    left: calc(100% + 2px);
  } @else if ($direction == 'is-left') {
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid #000; // default for IE
    border-left: 5px solid $color;
    right: calc(100% + 2px);
  }
}

@mixin tooltip($direction) {
  &.#{$direction} {
    &:before,
    &:after {
      @if ($direction == 'is-top') {
        top: auto;
        right: auto;
        bottom: calc(100% + 5px + 2px);
        left: 50%;
        transform: translateX(-50%);
      } @else if ($direction == 'is-bottom') {
        top: calc(100% + 5px + 2px);
        right: auto;
        bottom: auto;
        left: 50%;
        transform: translateX(-50%);
      } @else if ($direction == 'is-right') {
        top: 50%;
        right: auto;
        bottom: auto;
        left: calc(100% + 5px + 2px);
        transform: translateY(-50%);
      } @else if ($direction == 'is-left') {
        top: 50%;
        right: calc(100% + 5px + 2px);
        bottom: auto;
        left: auto;
        transform: translateY(-50%);
      }
    }

    &:before {
      @include tooltip-arrow($direction, $tooltip-background);
    }

    &.has-multiline {
      &.is-small:after {
        width: 140px;
      }

      &.is-medium:after {
        width: 210px;
      }

      &.is-large:after {
        width: 280px;
      }
    }
  }
}

// Base
.vue-custom-tooltip {
  @include tooltip('is-top');
  @include tooltip('is-right');
  @include tooltip('is-bottom');
  @include tooltip('is-left');
  position: relative;
  display: inline-block;
  text-decoration-line: none !important;

  &.is-underlined {
    border-bottom: 1px dotted #000; // default for IE
    border-bottom: 1px dotted $tooltip-background;
    line-height: 1.2;
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity $speed $easing, visibility $speed $easing;
  }

  &:before {
    z-index: 889;
  }

  &:after {
    content: attr(data-label);
    color: #fff; // default for IE
    color: $tooltip-color;
    background: #000; // default for IE
    background: $tooltip-background;
    width: auto;
    padding: 0.35rem 0.75rem 0.45rem;
    border-radius: 12px; // default for IE
    border-radius: $tooltip-radius;
    font-size: 0.85rem !important;
    font-weight: 400; // default for IE
    font-weight: $weight-normal;
    line-height: 1.3;
    letter-spacing: normal !important;
    text-transform: none;
    box-shadow: 0px 1px 2px 1px rgba(0, 1, 0, 0.2);
    z-index: 888;
    white-space: nowrap;
  }

  &:not([data-label='']):hover:before,
  &:not([data-label='']):hover:after {
    opacity: 1;
    visibility: visible;
  }

  // If parent is disabled
  :disabled & {
    pointer-events: none;
  }

  &:not([data-label='']).is-sticky {
    &:before,
    &:after {
      opacity: 1;
      visibility: visible;
    }
  }

  &.has-multiline {
    &:after {
      display: flex-block;
      padding: 0.5rem 0.75rem 0.65rem;
      text-align: center;
      line-height: 1.4;
      white-space: pre-wrap;
    }
  }
}
</style>

<template>
  <v-icon :name="name" :scale="scale"></v-icon>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      required: true,
      default: null,
    },
    scale: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      iconName: this.name || null,
      iconScale: this.scale || null,
    }
  },
  watch: {
    name(value) {
      this.iconName = value
    },
    scale(value) {
      this.iconScale = value
    },
  },
}
</script>

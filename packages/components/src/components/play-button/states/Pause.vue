<template>
  <span class="pause-inner" aria-hidden="true">
    <icon type="pause" :color="color"></icon>
    <slot></slot>
  </span>
</template>

<script>
import Icon from 'components/icons'
import { color } from 'defaults'

export default {
  props: {
    color: {
      type: String,
      default: color
    },
    size: {
      type: Number
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
.pause-inner {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <router-link :to="link" class="g-btn">
    <span>{{ title }}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    cLink: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      link: this.$props.cLink
    }
  }
}
</script>

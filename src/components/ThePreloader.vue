<template>
  <transition name="loading">
    <div v-show="loading" class="p-overlay">
      <div class="mask">
        <h1>Hello!</h1>
      </div>

      <div class="mask">
        <h1>Welcome to my kingdom</h1>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },

  methods: {
    start() {
      if (sessionStorage.load === 'true') {
        this.loading = false
      } else {
        this.loading = true
        sessionStorage.setItem('load', true)
      }
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

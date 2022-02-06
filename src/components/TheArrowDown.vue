<template>
  <Lottie
    :width="50"
    :height="50"
    :animationData="lottieOptions"
    class="main-layout__arrow"
    ref="arrow"
  />
</template>

<script>
import Vue3Lottie from 'vue3-lottie'
import animationData from '../assets/documents/scrolldown.json'

export default {
  components: {
    'Lottie': Vue3Lottie
  },

  data() {
    return {
      lottieOptions: animationData
    }
  },

  methods: {
    arrowShow() {
      const arrow = this.$refs.arrow.$el

			const show = setInterval(() => {
				this.$gsap.to(arrow, {
					opacity: 1,
				})
			}, 4000)

      window.onscroll = () => {
				let d = document.documentElement
				let offset = Math.ceil(d.scrollTop + window.innerHeight)
				let height = Math.ceil(d.offsetHeight)

        this.$gsap.to(arrow, {opacity: 0})
        clearInterval(show)
				this.arrowShow()

				if (offset === height) {
					this.$gsap.to(arrow, {rotate: '180deg'})
				} else {
					this.$gsap.to(arrow, {rotate: '0deg'})
				}
      }
    }
  },

  mounted() {
    this.arrowShow()
  }
}
</script>

<template>
  <div class="error__bl">
    <Lottie :width="150" :animationData="lottieOptions"/>

    <div class="mt--50">
			<the-btn cLink="/" title="back to home"></the-btn>
    </div>
		<the-cursor></the-cursor>
  </div>
</template>

<script>
import TheCursor from '../components/TheCursor.vue'
import TheBtn from '../components/TheBtn.vue'
import Vue3Lottie from 'vue3-lottie'
import animationData from '../assets/documents/404.json'

export default {
  layout: 'error',
	
	components: {
		'Lottie': Vue3Lottie,
		TheCursor,
		TheBtn	
	},
	
	data() {
		return {
			anim: null,
			lottieOptions: animationData
		}
	},
}
</script>

<template>
  <h1 class="home__h">
    {{ title }}
  </h1>
</template>

<script>
	import { titleAnimation } from '../plugins/titleAnimation'
	export default {
		props: {
			title: {
				type: String,
				required: true
			}
		},

		mixins: [titleAnimation]
	}
</script>

<template>
	<component :is="layout">
		<router-view></router-view>
	</component>
	<the-cursor></the-cursor>
	<the-arrow-down v-if="!isApp"></the-arrow-down>
</template>

<script>
	import mainLayout from './layouts/defaultLayout.vue'
	import errorLayout from './layouts/errorLayout.vue'
	import theCursor from './components/TheCursor.vue'
	import TheArrowDown from './components/TheArrowDown.vue'

  export default {
		name: 'App',

		components: {
			mainLayout,
			errorLayout,
			theCursor,
			TheArrowDown
		},

		data() {
			return {
				layout: null,
				isApp: false
			}
		},

		watch: {
			$route(to) {
				document.title = to.meta.title ? (to.meta.title + ' | FlowDmitry') : 'FlowDmitry'
				if (to.meta.layout !== undefined) {
					this.layout = to.meta.layout
				} else {
					this.layout = 'error'
				}

				if (to.name === 'Home') {
					this.isApp = true
				} else {
					this.isApp = false
				}
			}
		}
  }
</script>


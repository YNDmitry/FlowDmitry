export const titleAnimation = {
	updated() {
		this.titleAnimateOnScroll()
	},
	
  methods: {
    titleAnimateOnScroll() {
			const headings = document.querySelectorAll('h1')
			headings.forEach(item => {
				this.$gsap.set(item, {
					y: 150
				})
				this.$gsap.to(item, {
					y: 0,
					scrollTrigger: {
						trigger: item,
						start: 'top 80%',
					}
				})
			})
    }
  }
}

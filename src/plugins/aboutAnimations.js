export const aboutAnimations = {
	mounted() {
		this.animateOnScroll()
		this.animateMainContent()
	},

	methods: {
		animateOnScroll() {
      const elements = document.querySelectorAll('.a-s2__bl-item')
      elements.forEach((item, idx) => {
    	  const itemEven = idx % 2 === 0
				if (itemEven) {
					this.$gsap.set(elements, {
						opacity: 0,
						x: -300,
						y: -200,
					})
				} else {
					this.$gsap.set(elements, {
						opacity: 0,
						x: 300,
						y: 200
					})
				}
				this.$gsap.to(item, {
					x: 0,
					y: 0,
					opacity: 1,
					ease: 'power1.in',
					scrollTrigger: {
						trigger: item,
						start: 'top bottom',
						end: 'bottom bottom',
						scrub: 1
					}
				})
      })
    },

		animateMainContent() {
			const paragraph = document.querySelector('.about__h').childNodes[1]
			const logos = document.querySelectorAll('.about__skills-grid-item')

			const t1 = this.$gsap.timeline({ defaults: {ease: 'power2.in'} })

			this.$gsap.set(paragraph, {
				opacity: '0%',
				y: 100
			})

			this.$gsap.set(logos, {
				opacity: '0%'
			})

			t1.to(paragraph, {
				opacity: '100%',
				y: 0,
				// delay: .3,
				duration: 0.5,
			}, 0)

			logos.forEach((el, idx) => {
				this.$gsap.to(el, {
					opacity: '100%',
					duration: .2,
					delay: idx * 0.18
				})
			})
		}
	}
}

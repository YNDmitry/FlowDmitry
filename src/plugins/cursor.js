export const cursor = {
	updated() {
		const cursor = document.querySelector('.cursor')
		const links = this.$gsap.utils.toArray('a')

		let mouse = {
			x: 0,
			y: 0
		}

		const getMousePos = e => {
			return {
				x: e.clientX,
				y: e.clientY
			}
		}

		this.$gsap.to(cursor, {
			scale: 1,
			backgroundColor: 'white',
		})

		links.forEach(item => {
			item.addEventListener('mouseenter', () => {
				this.$gsap.to(cursor, {
					scale: 6,
					opacity: 0.7,
					backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16)
				})
			})

			item.addEventListener('mouseleave', () => {
				this.$gsap.to(cursor, {
					scale: 1,
					opacity: 1,
					backgroundColor: 'white'
				})
			})
		})

		document.addEventListener('mousemove', (e) => {
			mouse = getMousePos(e)
			this.$gsap.to(cursor, {
				duration: 0.3,
				left: mouse.x / window.innerWidth * 100 + 'vw',
				top: mouse.y / window.innerHeight * 100 + 'vh'
			})
		})

		document.addEventListener('mouseleave', () => {
			this.$gsap.to(cursor, {
				opacity: 0,
				duration: 0.4,
				ease: 'power1.ease'
			})
		})

		document.addEventListener('mouseenter', () => {
			this.$gsap.to(cursor, {
				opacity: 1,
				duration: 0.4,
				ease: 'power1.ease'
			})
		})
	}
}

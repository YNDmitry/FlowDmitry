import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export const $gsap = {
	created() {
		this.$gsap = gsap
	}
}

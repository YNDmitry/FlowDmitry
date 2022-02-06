import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/index.vue'
import works from '../pages/works.vue'
import about from '../pages/about.vue'
import errorLayout from '../layouts/errorLayout.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: home,
    meta: {
      layout: 'mainLayout',
      title: 'Home',
    },
  },
	{
    name: 'About',
    path: '/about',
    component: about,
    meta: {
      layout: 'mainLayout',
      title: 'My skills',
    },
  },
	{
    name: 'Works',
    path: '/works',
    component: works,
    meta: {
      layout: 'mainLayout',
      title: 'My works',
    },
  },
	{
    name: 'Error',
    path: '/:pathMatch(.*)*',
		component: errorLayout,
    meta: {
    	layout: 'errorLayout',
    	title: '404',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'current',
  linkExactActiveClass: 'current',
  scrollBehavior() {
		setTimeout(() => {top: 0}, 300)
  },
  routes,
})

export default router

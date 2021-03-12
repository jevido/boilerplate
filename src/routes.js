import Home from './pages/Home.vue'
import NotFound from './pages/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { 
		path: '/', 
		component: Home, 
		meta: { title: 'Home' } 
	},
  {
    path: '/about',
    meta: { title: 'About' },
    component: () => import('./pages/About.vue'),
  },
  { 
		path: '/:path(.*)', 
		component: NotFound 
	},
]

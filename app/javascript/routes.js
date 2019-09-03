import VueRouter from 'vue-router'

import First from './views/first'
import Second from './views/second'
import PostNew from './views/posts/new'
const router = new VueRouter({
	routes: [
		{
			path: '/first',
			component: First
		},
		{
			path: '/second',
			component: Second
		},
		{
			path: '/posts/new',
			component: PostNew
		}

	]
})

export default router
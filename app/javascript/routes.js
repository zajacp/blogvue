import VueRouter from 'vue-router'

import First from './views/first'
import Second from './views/second'
import PostNew from './views/posts/new'
import PostIndex from './views/posts/index'
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
			path: '/posts',
			component: PostIndex
		},
		{
			path: '/posts/new',
			component: PostNew

		}

	]
})

export default router
import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/HomeView.vue'
import Register from './views/Register'
import RegisterStep1 from './components/RegisterStep/RegisterStep1'
import RegisterStep2 from './components/RegisterStep/RegisterStep2'
import RegisterStep3 from './components/RegisterStep/RegisterStep3'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      component: Register,
      name: 'register',
      children: [{
        path: 'step1',
        name: 'step1',
        component: RegisterStep1,
      },
      {
        path: 'step2',
        name: 'step2',
        component: RegisterStep2,
      },
      {
        path: 'step3',
        name: 'step3',
        component: RegisterStep3,
      },
      ],
    },
  ]
}
)

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router

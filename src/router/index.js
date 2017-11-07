import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import clothing from '../components/clothing/clothing.vue'
Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path:'/clothing',
      component:clothing
    }
  ]
})

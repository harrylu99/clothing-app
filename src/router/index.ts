import Vue from 'vue'
import Router from 'vue-router'
import app from '../App.vue'
import ProductPage from '../components/ProductPage/ProductPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      redirect: '/ProductPage',
      component: app,
      children: [
        {
          path: '/ProductPage',
          name: 'ProductPage',
          component: ProductPage
        }
      ]
    }
  ]
})

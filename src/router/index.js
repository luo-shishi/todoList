import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import finished from '../components/finished'
import unfinished from '../components/unfinished'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:index
    },
    {
      path: '/index',
      name: 'index',
      component:index
    },
    {
      path: '/finished',
      name: 'finished',
      component:finished
    },
    {
      path: '/unfinished',
      name: 'unfinished',
      component:unfinished
    }
  ]
})

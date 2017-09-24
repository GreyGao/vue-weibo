import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(Router)

const Home = { template: '<div>This is Home</div>' }

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {

    }
  ]
})
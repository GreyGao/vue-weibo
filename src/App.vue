<template>
  <div id="app">
    <h1>欢迎来到新浪微博</h1>
    <p>
      <router-link to="/home">首页</router-link>
      <router-link to="/message">消息</router-link>
      <router-link to="/discovery">发现</router-link>
      <router-link to="/me">我</router-link>

    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import Home from './pages/Home.vue'
  import Me from './pages/Me.vue'
  import Message from './pages/Message.vue'
  import Discovery from './pages/Discovery.vue'

  Vue.use(VueRouter)

  //创建Router
  const routes = [
    {path: '/home', component: Home},
    {path: '/message', component: Message},
    {path: '/discovery', component: Discovery},
    {path: '/me', component: Me}
  ]
  const router = new VueRouter({
    routes
  })

export default {
  name: 'app',
  router,
  data () {
    return {
      msg:'hi'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

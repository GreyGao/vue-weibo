<template>
  <div id="app">
    <Topbar></Topbar>
    <h1>欢迎来到新浪微博</h1>
    <ul class="tabs">
      <li><router-link to="/home">首页</router-link></li>
      <li><router-link to="/message">消息</router-link></li>
      <li><router-link to="/discovery">发现</router-link></li>
      <li><router-link to="/me">我</router-link></li>
    </ul>
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
  import Topbar from './components/Topbar.vue'

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
  },
  components:{Topbar}
}
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "static/css/reset.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  
  .tabs{
    background: #F5F5F5;
    display:flex;
    li{
      width:25%;
      text-align: center;
      padding: 6px 0;
      a{
        font-size:15px;
        color: #5d5d5d;
      }
    }
  }
}
a {
  color: #42b983;
}
</style>

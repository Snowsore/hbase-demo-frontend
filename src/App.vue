<template>
  <div id="app">
    <Router id='router' :page='page'></Router>
    <Navbar id='navbar' @goto='goto'></Navbar>
    <Sidebar id='sidebar' :user='user' @goto='goto' @pop='pop'></Sidebar>
    <Login @login='login' ref='login'></Login>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Router from './components/Router'
import Login from './Pop/Login'
import api from '@/api.js'

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

import HighchartsVue from 'highcharts-vue'
Vue.use(HighchartsVue)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      page: 'index',
      user: '',
    }
  },
  components: {
    Navbar,
    Sidebar,
    Router,
    Login
  },
  mounted() {
    this.checkLogin()
  },
  methods: {
    goto(page) {
      this.page = page
    },
    pop(page) {
      if(!this.user) {
        this.$refs[page].pop()
      }
    },
    login(name) {
      this.user = name
    },
    async checkLogin() {
      var data = await api.isLogin()
      this.user = data.name
    }
  }
}
</script>

<style>

html {
  overflow: hidden;
  font-family: 'Microsoft YaHei';
}
</style>

<style scoped>

body {
  margin: 0;
  font-family: Microsoft JhengHei;
}

#sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 15%;
  height: 100%;
}

#navbar {
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 5%;
}

#router {
  position: absolute;
  top: 0;
  left: 15%;
  width: 85%;
  height: 100%;
}

@media screen and (max-width: 1280px) {

  #sidebar {
    position: absolute;
    display: none;
  }

  #navbar {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 5%;
  }

  #router {
    position: absolute;
    top: 5%;
    left: 0%;
    width: 100%;
    height: 95%;
  }

}

</style>

<template>
  <div id="app">
    <Router id='router' :page='page'></Router>

    <Sidebar id='sidebar'></Sidebar>
    <Navbar id='navbar' @goto='goto'></Navbar>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Router from './components/Router'

import Vue from 'vue'
import Vuetify from 'vuetify'
import HighchartsVue from 'highcharts-vue'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(HighchartsVue)

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      page: 'index'
    }
  },
  components: {
    Navbar,
    Sidebar,
    Router
  },
  methods: {
    goto(page) {
      this.page = page
    }
  }
}
</script>

<style>

html {
  overflow: hidden;
}

</style>

<style scoped>

body {
  margin: 0;
  font-family: Microsoft JhengHei;
}

#sidebar {
  top: 0;
  left: 0;
  width: 10%;
  height: 100%;
}

#navbar {
  top: 0;
  left: 10%;
  width: 100%;
  height: 7%;
}

#router {
  top: 7%;
  left: 10%;
  width: 90%;
  height: 93%;
}

</style>

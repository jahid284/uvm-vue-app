import svg4everybody from 'svg4everybody'

import Vue from 'vue'
//import { sync } from 'vuex-router-sync'
import App from './components/App.vue'
import About from './views/About.vue'
import Faculty from './views/Faculty.vue'
import Homepage from './views/Homepage.vue'
import Stories from './views/Stories.vue'
import StoryTemplate1 from './views/StoryTemplate1.vue'
import StoryTemplate2 from './views/StoryTemplate2.vue'
import StoryTemplate3 from './views/StoryTemplate3.vue'
import StoryTemplate4 from './views/StoryTemplate4.vue'
import StoryTemplate5 from './views/StoryTemplate5.vue'

import store from './store'

const app = new Vue({

  store,
  el: '#app',
  components:{
    App,
    About,
    Faculty,
    Homepage,
    Stories,
    StoryTemplate1,
    StoryTemplate2,
    StoryTemplate3,
    StoryTemplate4,
    StoryTemplate5
  },

  mounted() {
    svg4everybody()
  }
})


export { app, store }

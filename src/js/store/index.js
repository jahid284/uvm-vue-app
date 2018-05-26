import Vue from 'vue'
import Vuex from 'vuex'

import ScrollMagic from 'scrollmagic';

Vue.use(Vuex)


const state = {
  scrollMagicController: new ScrollMagic.Controller(),
}

const mutations = {}

const actions = {}



const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store

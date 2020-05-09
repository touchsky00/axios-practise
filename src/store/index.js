import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {}, mutations = {}, actions = {}, getter = {}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getter: getter
})

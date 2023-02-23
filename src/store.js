import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {name: "Sneha",id: "abc123"},
    categories: ["housing", "nature", "food", "community", "nature", "sustainability"]

  },
  mutations: {},
  actions: {}
})

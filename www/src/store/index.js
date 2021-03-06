import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import upload from './upload'
import dynamics from './dynamics'
import theme from './theme'
import search from './search'
import comment from './comment'
import approve from './approve'
import message from './message'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    upload,
    dynamics,
    theme,
    search,
    comment,
    approve,
    message
  }
})

export default store

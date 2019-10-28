import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)
// 导入vue x 持久化插件
// import VuexPersistence from 'vuex-persist'
// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
  // plugins: [vuexLocal.plugin]
})

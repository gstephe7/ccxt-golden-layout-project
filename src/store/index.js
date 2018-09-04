import Vue from 'vue'
import Vuex from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    exchanges: [],
    exchange: {},
    loadingMarkets: false,
    failedMarkets: false,
    pairs: [],
    pair: '',
    loadingTrades: false,
    failedTrades: false,
    trades: []
  },
  getters: getters,
  mutations: mutations,
  actions: actions
})

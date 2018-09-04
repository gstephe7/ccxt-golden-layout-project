import ccxt from 'ccxt'

import {
  ALL_EXCHANGES,
  EXCHANGE_BY_ID,
  LOADING_MARKETS,
  LOAD_MARKETS,
  LOAD_PAIR,
  LOADING_TRADES,
  LOAD_TRADES,
  CLEAR_STATE
} from './mutation-types.js'

export const mutations = {
  [ALL_EXCHANGES] (state, payload) {
    state.exchanges = ccxt.exchanges
  },
  [EXCHANGE_BY_ID] (state, payload) {
    state.exchange = payload
  },
  [LOADING_MARKETS] (state) {
    state.loadingMarkets = true
  },
  [LOAD_MARKETS] (state, payload) {
    state.loadingMarkets = false
    state.pairs = payload
  },
  [LOAD_PAIR] (state, payload) {
    state.pair = payload
    this.dispatch('updateTrades')
  },
  [LOADING_TRADES] (state) {
    state.loadingTrades = true
  },
  [LOAD_TRADES] (state, payload) {
    state.loadingTrades = false
    let trades = payload
    let newTrades = []
    trades.forEach(trade => {
      let startIndex = trade.datetime.indexOf('T') + 1
      let endIndex = trade.datetime.indexOf('.')
      newTrades.push({
        id: trade.id,
        amount: trade.amount.toFixed(5),
        price: trade.price.toFixed(2),
        time: trade.datetime.slice(startIndex, endIndex),
        size: trade.amount * 100
      })
    })
    state.trades = newTrades.reverse()
  },
  [CLEAR_STATE] (state) {
    state.exchange = {}
    state.pairs = []
    state.pair = ''
    state.trades = []
    this.dispatch('updateTrades')
  }
}

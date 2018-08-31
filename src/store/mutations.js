import ccxt from 'ccxt'

import {
  ALL_EXCHANGES,
  EXCHANGE_BY_ID,
  LOAD_MARKETS,
  LOAD_PAIR,
  ALL_TRADES,
  UPDATE_TRADES
} from './mutation-types.js'

export const mutations = {
  [ALL_EXCHANGES] (state, payload) {
    state.exchanges = ccxt.exchanges
  },
  [EXCHANGE_BY_ID] (state, payload) {
    let ExchangeClass = ccxt[payload]
    let exchange = new ExchangeClass()
    state.exchange = exchange
    console.log(state.exchange)
  },
  [LOAD_MARKETS] (state) {
    let exchange = state.exchange
    exchange.fetchMarkets()
    let symbols = exchange.symbols
    state.pairs = symbols
    console.log(state.pairs)
  },
  [LOAD_PAIR] (state, payload) {
    state.pair = payload
    console.log(state.pair)
  },
  [ALL_TRADES] (state) {
    let exchange = state.exchange
    let pair = state.pair
    let limit = 20
    let since = -86400000
    let orders = []
    let trades = orders.push(exchange.fetchTrades(pair, since, limit))
    setTimeout(() => {
      let trades = orders.reverse()
      // trades.forEach(trade => {
      //   let startIndex = trade.datetime.indexOf('T') + 1
      //   let endIndex = trade.datetime.indexOf('.')
      //   state.trades.push({
      //     amount: trade.amount.toFixed(5),
      //     price: trade.price.toFixed(2),
      //     time: trade.datetime.slice(startIndex, endIndex),
      //     size: trade.amount * 100
      //   })
      // })
      console.log(orders)
    }, 10000)
  }
}

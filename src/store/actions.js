import ccxt from 'ccxt'
import HttpsProxyAgent from 'https-proxy-agent'
import {
  ALL_EXCHANGES,
  EXCHANGE_BY_ID,
  LOADING_MARKETS,
  FAILED_MARKETS,
  LOAD_MARKETS,
  LOAD_PAIR,
  LOADING_TRADES,
  FAILED_TRADES,
  LOAD_TRADES,
  CLEAR_STATE
} from './mutation-types'

const proxy = process.env.http_proxy || 'http://168.63.76.32:3128/'
const agent = new HttpsProxyAgent(proxy)

export const actions = {
  allExchanges ({commit}) {
    commit(ALL_EXCHANGES)
  },
  exchangeById ({commit}, payload) {
    commit(CLEAR_STATE)
    let ExchangeClass = ccxt[payload]
    let exchange = new ExchangeClass({agent})
    commit(EXCHANGE_BY_ID, exchange)
    this.dispatch('loadMarkets', payload)
  },
  async loadMarkets ({commit}, payload) {
    commit(LOADING_MARKETS)
    let ExchangeClass = ccxt[payload]
    let exchange = new ExchangeClass({agent})
    try {
      await exchange.loadMarkets()
    } catch (err) {
      commit(FAILED_MARKETS)
    }
    let symbols = exchange.symbols
    commit(LOAD_MARKETS, symbols)
  },
  loadPair ({commit}, payload) {
    commit(LOAD_PAIR, payload)
  },
  async loadTrades ({commit}) {
    let exchangeName = this.getters.exchangeName
    let ExchangeClass = ccxt[exchangeName]
    let exchange = new ExchangeClass({agent})
    let pair = this.getters.returnPair
    let limit = 20
    let since = -86400000
    let trades = []
    try {
      trades = await exchange.fetchTrades(pair, since, limit)
    } catch (err) {
      commit(FAILED_TRADES)
    }
    commit(LOAD_TRADES, trades)
  },
  updateTrades ({commit}) {
    let reload
    clearInterval(this.reload)
    if (this.getters.returnPair) {
      commit(LOADING_TRADES)
      this.reload = setInterval(() => {
        this.dispatch('loadTrades')
      }, 2000)
    }
  }
}

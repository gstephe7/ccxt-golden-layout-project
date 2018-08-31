import ccxt from 'ccxt'
import HttpsProxyAgent from 'https-proxy-agent'
import {
  ALL_EXCHANGES,
  EXCHANGE_BY_ID,
  LOAD_MARKETS,
  LOAD_PAIR,
  ALL_TRADES,
  UPDATE_TRADES
} from './mutation-types'

const proxy = process.env.http_proxy || 'http://168.63.76.32:3128'
const agent = new HttpsProxyAgent(proxy)

export const actions = {
  allExchanges ({commit}) {
    commit(ALL_EXCHANGES)
  },
  exchangeById ({commit}, payload) {
    commit(EXCHANGE_BY_ID, payload)
    commit(LOAD_MARKETS)
  },
  loadPair ({commit}, payload) {
    commit(LOAD_PAIR, payload)
  },
  async allTrades ({commit}) {
    commit(ALL_TRADES)
  }
}

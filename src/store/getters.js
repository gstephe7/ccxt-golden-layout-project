export const getters = {
  allExchanges: (state, getters) => {
    return state.exchanges
  },
  exchangeById: (state, getters) => {
    return state.exchange
  },
  exchangeName: (state, getters) => {
    return state.exchange.id
  },
  loadingMarkets: (state, getters) => {
    return state.loadingMarkets
  },
  failedMarkets: (state) => {
    return state.failedMarkets
  },
  allPairs: (state, getters) => {
    return state.pairs
  },
  returnPair: (state, getters) => {
    return state.pair
  },
  loadingTrades: (state, getters) => {
    return state.loadingTrades
  },
  allTrades: (state, getters) => {
    return state.trades
  }
}

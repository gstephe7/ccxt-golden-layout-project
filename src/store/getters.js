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
  allPairs: (state, getters) => {
    return state.pairs
  },
  returnPair: (state, getters) => {
    return state.pair
  },
  allTrades: (state, getters) => {
    return state.trades
  }
}

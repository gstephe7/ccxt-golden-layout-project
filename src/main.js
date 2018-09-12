import Vue from 'vue'
import GoldenLayout from 'golden-layout'
import Exchange from '@/components/Exchange'
import Pair from '@/components/Pair'
import Trades from '@/components/Trades'
import store from './store'

Vue.config.productionTip = false

let config = {
  content: [{
    type: 'column',
    content: [{
      type: 'component',
      title: 'Exchange',
      isClosable: false,
      componentName: 'template',
      componentState: { id: 'exchange-section', name: 'Exchange' }
    }, {
      type: 'component',
      title: 'Pair',
      isClosable: false,
      componentName: 'template',
      componentState: { id: 'pair-section', name: 'Pair' }
    }, {
      type: 'component',
      title: 'Trades',
      isClosable: false,
      componentName: 'template',
      componentState: { id: 'trades-section', name: 'Trades' }
    }]
  }]
}

const layout = new GoldenLayout(config)

layout.registerComponent('template', (container, state) => {
  let html = `<div id="${state.id}"></div>`
  container.getElement().html(html)
  setTimeout(() => {
    let options = {
      store,
      data: {
        layout: layout
      },
      components: { Exchange, Pair, Trades },
      el: `#${state.id}`,
      template: `<${state.name} :layout="this.layout"/>`
    }
    new Vue(options)
  })
})

layout.eventHub.on('allExchanges', () => {
  store.dispatch('allExchanges')
})

layout.eventHub.on('selectExchange', (payload) => {
  store.dispatch('exchangeById', payload)
})

layout.eventHub.on('loadPair', (payload) => {
  store.dispatch('loadPair', payload)
})

layout.init()

import Vue from 'vue'
import store from './store'
import $ from 'jquery'
import GoldenLayout from 'golden-layout'
import Exchange from '@/components/Exchange'
import Pair from '@/components/Pair'
import Trades from '@/components/Trades'

Vue.config.productionTip = false

const VueApp = {
  store,
  el: '#app'
}

let config = {
  settings: {
    hasHeaders: true
  },
  content: [{
    type: 'row',
    content: [
      {
        title: 'Exchange',
        type: 'component',
        isClosable: false,
        componentName: 'template',
        componentState: {templateId: 'exchange'}
      },
      {
        title: 'Pair',
        type: 'component',
        isClosable: false,
        componentName: 'template',
        componentState: {templateId: 'pair'}
      },
      {
        title: 'Trades',
        type: 'component',
        isClosable: false,
        componentName: 'template',
        componentState: {templateId: 'trades'}
      }
    ]
  }]
}

const gLayout = new GoldenLayout(config, $(VueApp.el))

gLayout.registerComponent('template', (container, state) => {
  const html = `<div id="${state.templateId}">${$('#' + state.templateId).html}</div>`
  container.getElement().html(html)
  setTimeout(() => {
    let options = {
      el: `#${state.templateId}`
    }
    new Vue(options)
  })
})

gLayout.init()

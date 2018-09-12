<template>
  <div id="exchange">
    <h1 class="text-center">EXCHANGE</h1>
    <div class="text-center">
      <select v-model="exchangeValue" @change="selectExchange" :class="{ selectFilled : exchangeValue }">
        <option value="" class="placeholderOption" disabled selected>Ex: Binance</option>
        <option v-for="exchange in exchanges" :key="exchange" :value="exchange">{{ exchange }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: ['layout'],
  data () {
    return {
      exchangeValue: ''
    }
  },
  computed: {
    exchanges () {
      return this.$store.getters.allExchanges
    }
  },
  created () {
    if (this.exchanges.length === 0) {
      this.layout.eventHub.emit('allExchanges')
    }
  },
  methods: {
    selectExchange () {
      this.layout.eventHub.emit('selectExchange', this.exchangeValue)
    }
  }
}
</script>

<style scoped>
  #exchange {
    background-color: #f7af3b;
    min-height: 100vh;
  }

  h1 {
    padding-top: 20px;
    color: #f9f9f9;
    font-size: 50px;
  }
</style>

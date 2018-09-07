<template id="exchange">
  <div>
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
  data () {
    return {
      exchangeValue: ''
    }
  },
  created () {
    if (this.exchanges.length === 0) {
      this.$store.dispatch('allExchanges')
    }
  },
  computed: {
    exchanges () {
      return this.$store.getters.allExchanges
    }
  },
  methods: {
    selectExchange () {
      this.$store.dispatch('exchangeById', this.exchangeValue)
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
    margin-top: 30vh;
    color: #f9f9f9;
    font-size: 55px;
  }

  select {
    background-color: #fcd697;
    color: rgba(0,0,0,.2);
    margin-top: 20px;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 5px;
    font-size: 28px;
    font-weight: 500;
    padding: 10px;
    width: 75%;
    transition: 250ms all;
  }

  select:focus {
    outline: 0;
    transform: scale(1.03);
  }

  .selectFilled {
    color: #3d3d3d;
  }

  option {
    background-color: #fcd697;
    color: #3d3d3d;
    margin-top: 20px;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 5px;
    font-size: 28px;
    font-weight: 500;
    padding: 10px;
    width: 75%;
  }

  option:focus {
    outline: 0;
  }

  .placeholderOption {
    color: rgba(0,0,0,.2);
  }
</style>

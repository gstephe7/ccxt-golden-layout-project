<template>
  <div>
    <table>
      <tr>
        <th>Size</th>
        <th class="text-center">Price ({{ currency }})</th>
        <th class="text-right">Time</th>
        <th></th>
      </tr>
      <tr v-for="trade in allTrades" :key="trade.id">
        <td>{{ trade.amount }}</td>
        <td class="text-center trade-price">{{ trade.price }}</td>
        <td class="text-right trade-time">{{ trade.time }}</td>
        <td class="progress-bar" :style="{ width: adjustWidth(trade.size) + '%' }"></td>
      </tr>
    </table>
    <h5 v-if="loadingTrades">...loading trades</h5>
    <h5 class="errorMsg" v-else-if="failedTrades">Could not reach exchange</h5>
  </div>
</template>

<script>
export default {
  data () {
    return {
      trades: []
    }
  },
  computed: {
    allTrades () {
      if (this.$store.getters.returnPair) {
        return this.$store.getters.allTrades
      }
    },
    loadingTrades () {
      return this.$store.getters.loadingTrades
    },
    failedTrades () {
      return this.$store.getters.failedTrades
    },
    currency () {
      let pair = this.$store.getters.returnPair
      if (pair) {
        let startIndex = pair.indexOf('/') + 1
        return pair.slice(startIndex, 8)
      } else {
        return 'USD'
      }
    }
  },
  methods: {
    adjustWidth (value) {
      if (value > 400) {
        return 400
      } else {
        return value
      }
    }
  }
}
</script>

<style scoped>
  table {
    margin-left: 5%;
    width: 95%;
  }

  th {
    width: 25%;
    padding-bottom: 5px;
    border-bottom: 1px solid #f9f9f9;
  }

  .progress-bar {
    height: 20px;
    background-color: rgba(67, 153, 87, .15);
    float: right;
  }

  .trade-time {
    color: rgba(0,0,0,.6);
  }

  tr:nth-of-type(2n+2) td.trade-price {
    color: #436e99;
    font-weight: bold;
  }

  tr:nth-of-type(2n+3) td.trade-price {
    color: #439957;
    font-weight: bold;
  }

  tr:nth-of-type(2n+2) :nth-child(4) {
    background-color: rgba(67, 110, 153, .15);
  }

  .errorMsg {
    color: rgba(209, 74, 54, .9);
  }
</style>

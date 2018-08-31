<template>
  <table>
    <tr>
      <th>Size</th>
      <th class="text-center">Price (USD)</th>
      <th class="text-right">Time</th>
      <th></th>
    </tr>
    <tr v-for="trade in allTrades" :key="trade.id">
      <td>{{ trade.amount }}</td>
      <td class="text-center trade-price">{{ trade.price }}</td>
      <td class="text-right trade-time">{{ trade.time }}</td>
      <td class="progress-bar" :style="{ width: trade.size + '%' }"></td>
    </tr>
  </table>
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
      return this.$store.getters.allTrades
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
    background-color: rgba(67, 153, 87, .2);
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
    background-color: rgba(67, 110, 153, .2);
  }
</style>

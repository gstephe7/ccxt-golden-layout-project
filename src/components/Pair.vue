<template>
  <div id="pair">
    <h1 class="text-center">PAIR</h1>
    <div class="text-center">
      <select v-if="loadingMarkets">
        <option disabled selected>...loading</option>
      </select>
      <select class="errorMsg" v-else-if="failedMarkets">
        <option disabled selected>not available</option>
      </select>
      <select v-else v-model="pairValue" @change="selectPair" :class="{ selectFilled : pairValue }">
        <option v-if="!pairs" disabled selected>Not Available</option>
        <option v-else value="" class="placeholderOption" disabled selected>Ex: BTC/USD</option>
        <option v-for="pair in pairs" :key="pair" :value="pair">{{ pair }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: ['layout'],
  data () {
    return {
      pairValue: ''
    }
  },
  computed: {
    pairs () {
      if (this.$store.getters.allPairs) {
        return this.$store.getters.allPairs
      }
    },
    loadingMarkets () {
      if (this.$store.getters.loadingMarkets) {
        return true
      } else {
        return false
      }
    },
    failedMarkets () {
      return this.$store.getters.failedMarkets
    }
  },
  methods: {
    selectPair () {
      this.layout.eventHub.emit('loadPair', this.pairValue)
    }
  }
}
</script>

<style scoped>
  #pair {
    background-color: #f9c570;
    min-height: 100vh;
  }

  h1 {
    padding-top: 20px;
    color: #f9f9f9;
    font-size: 50px;
  }
</style>

<template>
  <div id="pair">
    <h1 class="text-center">PAIR</h1>
    <div class="text-center">
      <select v-model="pairValue" @change="selectPair" :class="{ selectFilled : pairValue }">
        <option v-if="pairs.length === 0" disabled selected>Not Available</option>
        <option v-else value="" class="placeholderOption" disabled selected>Ex: BTC/USD</option>
        <option v-for="pair in pairs" :key="pair" :value="pair">{{ pair }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pairValue: ''
    }
  },
  computed: {
    pairs () {
      return this.$store.getters.allPairs
    }
  },
  methods: {
    selectPair () {
      this.$store.commit('LOAD_PAIR', this.pairValue)
      this.$store.dispatch('loadTrades', this.pairValue)
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
  }

  select:focus {
    outline: 0;
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

<template id="trades">
  <div>
    <h1 class="text-center">TRADES <sup>live</sup></h1>
    <TradesTable></TradesTable>
  </div>
</template>

<script>
import TradesTable from '@/components/TradesTable'

export default {
  components: { TradesTable }
}
</script>

<style scoped>
  #trades {
    background-color: #fcd697;
    min-height: 100vh;
  }

  h1 {
    margin-top: 20px;
    color: #f9f9f9;
    font-size: 55px;
  }

  sup {
    font-size: 28px;
    top: -40px;
  }
</style>

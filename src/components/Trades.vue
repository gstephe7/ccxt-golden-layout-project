<template>
  <div id="trades">
    <h1 class="text-center">TRADES <sup>live</sup></h1>
    <TradesTable :layout="layout"></TradesTable>
  </div>
</template>

<script>
import TradesTable from '@/components/TradesTable'

export default {
  props: ['layout'],
  components: { TradesTable }
}
</script>

<style scoped>
  #trades {
    background-color: #fcd697;
    min-height: 100vh;
  }

  h1 {
    padding-top: 20px;
    color: #f9f9f9;
    font-size: 50px;
  }

  sup {
    font-size: 28px;
    top: -40px;
  }
</style>

<template>
    <div class="row">
      <Exchange class="col-md-4"></Exchange>
      <Pair class="col-md-4"></Pair>
      <Trades class="col-md-4"></Trades>
    </div>
</template>

<script>
import Exchange from '@/components/Exchange'
import Pair from '@/components/Pair'
import Trades from '@/components/Trades'

export default {
  name: 'App',
  components: {
    Exchange,
    Pair,
    Trades
  }
}
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans');

  body {
    margin: 0;
    overflow-x: hidden;
    font-family: 'Noto Sans', sans-serif;
  }
</style>

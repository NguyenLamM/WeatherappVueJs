<template>
  <h1>One day</h1>
  <search/>
  <one-day/>
</template>

<script>
  import Search from '../components/Search'
  import OneDay from '../components/OneDay'
  export default{
    name: 'oneday-view',
    components:{
      Search,
      OneDay,
    }
  }
</script>

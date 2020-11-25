<template>
  <h1>One day</h1>
  <one-day @ville-envoyee="weather"/>
</template>

<script>
  import OneDay from '../components/OneDay'
  export default{
    name: 'oneday-view',
    components:{
      OneDay,
    }
  }
</script>

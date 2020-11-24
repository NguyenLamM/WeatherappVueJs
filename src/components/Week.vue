<template>
  <search @ville-envoyee="fetchWeather" />
</template>

<script>
  import Search from '../components/Search'
  export default {
    name: 'week',
    components:{
      Search,
    },
  }
</script>

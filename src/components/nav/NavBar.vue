<template>
  <h1>Weather app</h1>
  <router-link to="/one-day">One day</router-link>
  <router-link to="/week">Week</router-link>
</template>

<script>
  export default{
    name: "nav-bar"
  }
</script>

<style>
  h1{
    margin-top: 0;
  }
</style>

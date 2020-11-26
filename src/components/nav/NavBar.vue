<template>
  <h1 class="py-5 text-3xl font-bold">Weather app</h1>
  <div class="flex">
    <router-link class="w-2/4 py-3 bg-gray-300 uppercase" to="/one-day">One day</router-link>
    <router-link class="w-2/4 py-3 bg-gray-300 uppercase" to="/week">Week</router-link>
  </div>
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

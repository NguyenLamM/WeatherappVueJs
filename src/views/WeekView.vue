<template>
  <h1 class="pt-5 pb-3 text-xl">Week</h1>
  <week />
</template>

<script>
  import Week from '../components/Week'
  export default{
    name: 'week-view',
    components: {
      Week,
    }
  }
</script>

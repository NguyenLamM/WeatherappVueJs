<template>
  <div>
    <input class="w-2/4 p-4" type="text" placeholder="Ville" v-model="query" ville="test" @keypress="citySend">
  </div>
</template>

<script>
  export default{
    name: 'search',
    methods: {
      citySend(e){
        if (e.key == "Enter") {
          this.$emit("ville-envoyee",{
            ville: this.query,
          })
        }
      }
    }
  }
</script>

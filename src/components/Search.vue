<template>
  <div>
    <input type="text" placeholder="Ville" v-model="query" ville="test" @keypress="citySend">
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

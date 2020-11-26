<template>
  <div>
    <input class="w-2/4 p-4" type="text" placeholder="Ville" v-model="query" ville="test" @keypress="citySend">
    <div>
      <p>Recherche precedente</p>
      <ul>
        <li v-for="(item, index) in arraySearch" :key="index">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'search',
    data(){
      return {
        arraySearch: []
      }
    },
    methods: {
      citySend(e){
        if (e.key == "Enter") {
          this.arraySearch.push(this.query),
          this.$emit("ville-envoyee",{
            ville: this.query,

          })
        }
      }
    },
    mounted() {
      if (localStorage.arraySearch) {
        this.arraySearch = localStorage.arraySearch;
      }
    },
    watch: {
      arraySearch(newName) {
        localStorage.arraySearch = newName;
      }
    }
  }
</script>

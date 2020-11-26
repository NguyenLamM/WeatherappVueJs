<template>
  <div>
    <input class="w-2/4 p-4" type="text" placeholder="Ville" v-model="query" ville="test" @keypress="citySend">
    <div>
      <p class="mt-3">Recherche precedente</p>
      <div class="flex flex-row justify-center flex-wrap">
        <p class="mx-2 mt-1" v-for="(item, index) in arraySearch" :key="index">{{item}}</p>
        <p style="display: none ">prefs {{prefs}}</p>
      </div>
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
    created: function(){
      var loaded = JSON.parse(localStorage.getItem('myPrefs'));
      if(loaded){
        this.arraySearch = loaded.storedCities;
      }
      else{
        console.log('cant load prefs. Maybe the first time you come');
      }
    },
    computed: {
      prefs: function(){
        var p = {
          storedCities: this.arraySearch
        };
        localStorage.setItem('myPrefs', JSON.stringify(p));
        return p;
      }
    }

  }
</script>

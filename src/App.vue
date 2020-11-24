<template>
  <div>
    <h1>test</h1>
    <p>{{query}}</p>
    <input type="text" placeholder="Ville" v-model="query" @keypress="fetchWeather">
    
    <div class="result-container" v-if="typeof weather.main != 'undefined'">
      <div class="Location"> {{ weather.name }}, {{ weather.sys.country}}</div>
      <div class="data">{{ dateBuilder() }}</div>
    </div>
    <div class="weather-box"  v-if="typeof weather.main != 'undefined'">
      <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
      <div class="weather">{{weather.weather[0].main}}</div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'App',
  data (){
    return {
      api_key: '8684fc0dbcc7ea40b28e9f4ed1cc2317',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {}
    }
  },
  methods: {
    fetchWeather (e) {
      if (e.key == "Enter") {
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
      }
    },
    setResults(results){
    this.weather = results;
    },
     dateBuilder () {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

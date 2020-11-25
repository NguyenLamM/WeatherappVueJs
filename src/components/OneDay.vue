<template>
  <div
    id="one-day--container"
    class=""
    :class="typeof weather.main != 'undefined'"

  >
    <search @ville-envoyee="fetchWeather" />
    <div>
      <div class="result-container" v-if="typeof weather.main != 'undefined'">
        <div class="Location"> {{ weather.name }}, {{ weather.sys.country}}</div>
        <div class="data">{{ dateBuilder() }}</div>
      </div>
      <div class="weather-box"  v-if="typeof weather.main != 'undefined'">
        <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
        <div class="weather">{{weather.weather[0].main}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Search from '../components/Search'
  export default{
    name: "one-day",
    components:{
      Search,
    },
    data (){
      return {
        api_key: '057235dd5c2aec8dee5db666fe163476',
        url_base: 'https://api.openweathermap.org/data/2.5/',
        query: '',
        weather: {}
      }
    },
    methods: {
      fetchWeather (e) {
          this.query = e.ville;
          fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
            .then(res => {
              return res.json();
            }).then(this.setResults);
      },

      setResults(results){
        console.log(results)
        this.weather = results;
        var element = document.getElementById("one-day--container");
        if (this.weather.main.temp > 16){
          element.classList.add("hot")
        } else {
          element.classList.add("cold")
        }
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
  #one-day--container{
    height: 100vh;
  }
  #one-day--container.cold{
    background-image: url('../assets/cold.png');
    background-size: cover;
  }
  #one-day--container.hot{
    background-image: url('../assets/hot.png');
    background-size: cover;
  }
</style>

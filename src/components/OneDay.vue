<template>
  <search @ville-envoyee="fetchWeather" />
  <div
    id="one-day--container"
    class="mt-16 h-48 flex flex-col justify-center w-2/4 mx-auto rounded-lg relative"
    :class="typeof weather.main != 'undefined' && {'hot': mediumWeather(weather.weather[0].main), 'cold': !mediumWeather(weather.weather[0].main) }"
  >
    <div class="result-container" v-if="typeof weather.main != 'undefined'">
      <div class="Location"> {{ weather.name }}, {{ weather.sys.country}}</div>
      <div class="data">{{ dateBuilder() }}</div>
    </div>
    <div class="weather-box"  v-if="typeof weather.main != 'undefined'">
      <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
      <div class="weather">{{weather.weather[0].main}}</div>
      <div class="absolute emoticon" v-if=" weather.weather[0].main == 'Clouds'">☁️</div>
      <div class="absolute emoticon" v-if=" weather.weather[0].main == 'Rain'">🌧</div>
      <div class="absolute emoticon" v-if=" weather.weather[0].main == 'Clear'">☀️</div>
      <div class="absolute emoticon" v-if=" weather.weather[0].main == 'Fog' || weather.weather[0].main == 'Mist'">🌫</div>
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
        this.weather = results;
        var element = document.getElementById("one-day--container");
        console.log(element)
        if (this.weather.main.temp > 16){
          element.classList.add("hot")
          element.classList.remove('cold')
        } else {
          element.classList.add("cold")
          element.classList.remove('hot')
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
      },
      mediumWeather(temp){
        return temp > 16 ? true : false
      }
    }
  }
</script>

<style>
  .emoticon{
    top: -43px;
    right: -30px;
    font-size: 80px;
  }
  #one-day--container.cold{
    background-image: url('../assets/cold.png');
    background-size: 100% 100%;
    background-position: center;
  }
  #one-day--container.hot{
    background-image: url('../assets/hot.png');
    background-size: 100% 100%;
    background-position: center;
  }
</style>

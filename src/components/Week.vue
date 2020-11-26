<template>
  <div class="bg-gray-200">
    <search @ville-envoyee="fetchWeatherWeek" />
    <p class="text-xl mt-5">{{query}}</p>
    <div class="weather-week flex flex-col pb-10">
      <div class="" v-for="(weather, index) in weatherWeek.list" :key="index"  >
        <div
          class="h-48 flex flex-col justify-center w-2/4 mx-auto rounded-lg relative one--container mt-10 relative"
          v-if="index % 4 == 0"
          :class="{'hot': mediumWeather(weather.main.temp_max), 'cold': !mediumWeather(weather.main.temp_max) }"
        >
          <div>
            <p>{{weather.dt_txt}}</p>
            <p>{{weather.weather[0].main}}</p>
            <p>Description: {{weather.weather[0].description}}</p>
            <p>Température {{weather.main.temp_max}} °C</p>
            <div class="absolute emoticon" v-if=" weather.weather[0].main == 'Clouds'">☁️</div>
            <div class="absolute emoticon" v-if=" weather.weather[0].main == 'Rain'">🌧</div>
            <div class="absolute emoticon" v-if=" weather.weather[0].main == 'Clear'">☀️</div>
            <div class="absolute emoticon" v-if=" weather.weather[0].main == 'Fog' || weather.weather[0].main == 'Mist'">🌫</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Search from '../components/Search'
  export default {
    name: 'week',
    components:{
      Search,
    },
    data (){
      return {
        api_key: '057235dd5c2aec8dee5db666fe163476',
        url_base: 'https://api.openweathermap.org/data/2.5/',
        query: '',
        weatherWeek: {}
      }
    },
    computed: {

    },
    methods: {
      fetchWeatherWeek (e) {
          this.query = e.ville;
          fetch(`${this.url_base}forecast?q=${this.query}&units=metric&APPID=${this.api_key}`)
            .then(res => {
              return res.json();
            }).then(this.setResultsWeek);
      },
      setResultsWeek(results){
        this.weatherWeek = results;
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
  .one--container.cold{
    background-image: url('../assets/cold.png');
    background-size: 100% 100%;
    background-position: center;
  }
  .one--container.hot{
    background-image: url('../assets/hot.png');
    background-size: 100% 100%;
    background-position: center;
  }
</style>

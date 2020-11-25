<template>
  <div>
    <search @ville-envoyee="fetchWeatherWeek" />
    <p>{{query}}</p>
    <div class="weather-week">
      <div v-for="(weather, index) in weatherWeek.list" :key="index" >
        <div v-if="index % 4 == 0">
          <div>
            <p>{{weather.dt_txt}}</p>
            <p>{{weather.weather[0].main}}</p>
            <p>Description: {{weather.weather[0].description}}</p>
            <p>Température {{weather.main.temp_max}} °C</p>
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
      console.log(this.weatherWeek);
      },
    }
  }
</script>

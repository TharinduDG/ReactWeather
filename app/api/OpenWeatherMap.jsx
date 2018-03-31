var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=6b7f3dcb257782f1d1664ac818d7a11b&units=metric';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(response){
      if(response.cod && response.message) {
        // throwing an error in the success case of a promise, will result in a failed promies.
        throw new Error(response.message);
      } else {
        return response.data.main.temp;
      }
    },
    function(response){
      throw new Error(response.message);
    });
  }
}

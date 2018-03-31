var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  render: function(){
    var {isLoading, temp, location} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  },
  handleSearch: function(location) {
    this.setState({isLoading: true});
    var that = this;

    OpenWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function(error){
      that.setState({isLoading: false});
      alert(error);
    })
  }
});
module.exports = Weather;

var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is an example react application, which I used for learning purposes.</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - Javascript Framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Weather API to fetch weather data.
        </li>
      </ul>
    </div>
  )
}

module.exports = About;

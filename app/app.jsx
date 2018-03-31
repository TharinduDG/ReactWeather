var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

{/*
object destructuring.

var obj = {
	name: "jane"
}

var {name} = obj

variable name is created with the value of obj.name
*/}

{/*
	hashHistory Tells react to use # in urls

*/}
ReactDOM.render(
	<Router history = {hashHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About} />
			<Route path="examples" component={Examples} />

			<IndexRoute component={Weather}/>
		</Route>
	</Router>,
	document.getElementById('app')
);
var express = require('express');

//create our app
var app = express();

app.use(express.static('public')); // which folder to use to serve content

app.listen(3000, function(){ // starting the server
	console.log('Express server is up on port 3000');
})

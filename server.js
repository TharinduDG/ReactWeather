var express = require('express');

//create our app
var app = express();
const PORT = process.env.PORT || 3000; // PORT is needed when deploying to heroku

app.use(function (req, res, next){
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

app.use(express.static('public')); // which folder to use to serve content

app.listen(PORT, function(){ // starting the server
	console.log('Express server is up on port ' + PORT);
})

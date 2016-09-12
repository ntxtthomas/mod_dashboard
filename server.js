var express = require('express');
var path = require('path');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "./client/static")));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');

routes_setter(app)

app.listen(3000, function(){
	console.log('Listening on port 3000');
});


var express = require('express'),
	mongoose = require('mongoose'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	db = mongoose.connection,
	app = express();


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('localhost:27017/recipes');

db.on('error', console.error.bind(console, 'connection error:'));


var api = require('./controllers/api.js');

app.post('/add-recipe', api.addRecipe);
app.get('/get-recipes', api.allRecipes);
app.get('/single-recipe', api.getRecipe);
app.delete('/remove-recipe', api.removeRecipe);

app.get('/', function(req, res){
	res.send('Hello');
});


var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server: ', host, port);
});
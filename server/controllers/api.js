// This API controlller will export data to and from the db

var Recipe = require('../models/recipe.js');

exports.addRecipe = function(req, res){
	
	var recipe = new Recipe(req.body).save();

	//res.send('Working!');
};
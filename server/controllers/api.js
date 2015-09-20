// This API controlller will export data to and from the db

var Recipe = require('../models/recipe.js');

exports.addRecipe = function(req, res){
	
	var recipe = new Recipe(req.body).save(function(err, docs){
		if(err) { console.error(err); }
	});

};

exports.getRecipes = function(req, res){

	Recipe.find(function(err, recipes){
		if(err) { console.error(err); }

		res.send(recipes);
	});

};
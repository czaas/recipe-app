// This API controlller will export data to and from the db

var Recipe = require('../models/recipe.js');

exports.addRecipe = function(req, res){
	
	var recipe = new Recipe(req.body).save(function(err, docs){
		if(err) { console.error(err); }
	});

};

exports.allRecipes = function(req, res){

	Recipe.find(function(err, recipes){
		if(err) { console.error(err); }

		res.send(recipes);
	});

};

exports.getRecipe = function(req, res){

	var recipeId = req.url.substr(15);

	Recipe.find({ _id: recipeId }, function(err, recipe){
		if(err) { console.error(err); }

		res.send(recipe);
	});

};
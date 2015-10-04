// This API controlller will export data to and from the db

var Recipe = require('../models/recipe.js');

exports.updateRecipe = function(req, res){
	
	var id = req.body._id;

	Recipe.update({ _id: id }, req.body, {}, function(err, rawResponse){
		if(err) { console.error(err); }
		if(rawResponse){
			res.send(rawResponse);
		}
	});
};

exports.addRecipe = function(req, res){
	
	var recipe = new Recipe(req.body).save(function(err, newRecipe){
		if(err) { console.error(err); }

		res.send(newRecipe._id);
	});

};

exports.removeRecipe = function(req, res){

	Recipe.remove({ 
		
		_id: req.query.recipeId

	}, function(err){
		
		if(err) { console.error(err); res.send('ERROR'); }
		else { res.send('Data has been removed.'); }

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
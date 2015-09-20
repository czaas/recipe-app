var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var recipeSchema = new Schema({
	recipeName: String,
	recipeSteps: Array,
	recipeIngredients: Array
}, { collection: 'recipes' });

module.exports = mongoose.model('Recipe', recipeSchema);
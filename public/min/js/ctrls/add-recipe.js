app.controller("addRecipeCtrl",["$scope","$http","$location",function(e,n,t){e.steps=[],e.ingredients=[],e.editStep=function(){e.newStep=this.step,e.steps.splice(this.$index,1)},e.editIngredient=function(){e.newIngredient=this.ingredient.name,e.newIngredientQty=this.ingredient.qty,e.ingredients.splice(this.$index,1)},e.addStep=function(){e.newStep&&(e.steps.push(e.newStep),e.newStep="")},e.addIngredient=function(){if(e.newIngredient&&e.newIngredientQty){var n={name:e.newIngredient,qty:e.newIngredientQty};e.ingredients.push(n),e.newIngredient="",e.newIngredientQty=""}},e.saveRecipe=function(){var i={recipeName:e.recipeName,recipeSteps:e.steps,recipeIngredients:e.ingredients};n.post("http://localhost:3000/add-recipe",i).success(function(e){t.path("/view-recipe").search("recipe",e)})}}]);
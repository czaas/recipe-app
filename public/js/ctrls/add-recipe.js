app.controller('addRecipeCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	
	$scope.steps = [];
	$scope.ingredients = [];

	$scope.editStep = function(){
		$scope.newStep = this.step;
		$scope.steps.splice(this.$index, 1);
	};

	$scope.editIngredient = function(){
		$scope.newIngredient = this.ingredient.name;
		$scope.newIngredientQty = this.ingredient.qty;
		$scope.ingredients.splice(this.$index, 1);
	};

	$scope.addStep = function(){
		if($scope.newStep){
			$scope.steps.push($scope.newStep);
			$scope.newStep = '';
		}
	};

	$scope.addIngredient = function(){
		if($scope.newIngredient && $scope.newIngredientQty){
			var newIngredientObj = {
				name: $scope.newIngredient,
				qty: $scope.newIngredientQty
			};

			$scope.ingredients.push(newIngredientObj);
			$scope.newIngredient = '';
			$scope.newIngredientQty = '';
		}
	};

	$scope.saveRecipe = function(){
		var recipe = {
			recipeName: $scope.recipeName,
			recipeSteps: $scope.steps,
			recipeIngredients: $scope.ingredients
		};

		$http.post('http://localhost:3000/add-recipe', recipe)
		.success(function(urlForNewRecipe){
			$location.path('/view-recipe').search('recipe', urlForNewRecipe);
		});

	};
}]);
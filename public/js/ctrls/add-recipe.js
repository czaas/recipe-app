app.controller('addRecipeCtrl', ['$scope', '$http', function($scope, $http){
	
	$scope.steps = [];
	$scope.ingredients = [];

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
		.success(function(data){
			//console.log(data);
		});

	};
}]);
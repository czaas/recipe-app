app.controller('singleViewCtrl', 
	['$scope', '$http', '$location', 
	function($scope, $http, $location){
		
		var recipeId = $location.$$search.recipe;
		$scope.recipe = {};

		$http.get('http://localhost:3000/single-recipe?' + recipeId)
		.success(function(res){
			// the response it sent as objects in an array.
			// this request should only return 1 object in an array. 
			$scope.recipe = res[0];
		});

		$scope.saveUpdatedRecipe = function(){
			var recipe = $scope.recipe;
			$http.put('http://localhost:3000/update-recipe?' + recipeId, recipe)
			.success(function(){
				console.log('Updated successfully');
				$scope.editMode = false;
			});
		};

		$scope.updateIngredient = function(){
			if($scope.editIngredientInput && $scope.editIngredientQtyInput){
				var ingredient = {
					name: $scope.editIngredientInput,
					qty: $scope.editIngredientQtyInput
				};
				$scope.recipe.recipeIngredients.push(ingredient);

				$scope.editIngredientInput = '';
				$scope.editIngredientQtyInput = '';
			}
		};

		$scope.updateStep = function(){
			if($scope.editStepInput){
				$scope.recipe.recipeSteps.push($scope.editStepInput);
				$scope.editStepInput = '';
			}
		};

		$scope.editStep = function(){
			$scope.editStepInput = $scope.recipe.recipeSteps[this.$index];

			$scope.recipe.recipeSteps.splice(this.$index, 1);
		};

		$scope.editIngredient = function(){

			$scope.editIngredientInput = $scope.recipe.recipeIngredients[this.$index].name;
			$scope.editIngredientQtyInput = $scope.recipe.recipeIngredients[this.$index].qty;

			$scope.recipe.recipeIngredients.splice(this.$index, 1);
		};

	}]
);
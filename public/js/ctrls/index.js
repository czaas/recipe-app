app.controller('recipeFeedCtrl', ['$scope', '$http', function($scope, $http){
	
	$scope.recipes = [];


	$scope.removeRecipe = function(){

		var confirmMessage = confirm('Are you sure you want to delete "' + this.recipe.recipeName + '"?');

		if(confirmMessage){
			$http.delete('http://localhost:3000/remove-recipe?recipeId=' + this.recipe._id )
				.then(function(res){
					updateData();
				}
			);
		}
	}



	function updateData(){
		$http.get('http://localhost:3000/get-recipes')
			.then(function(res){
				$scope.recipes = res.data;
			}
		);

		console.log('data has been updated.');
	}

	updateData();

}]);
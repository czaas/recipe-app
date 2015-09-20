app.controller('singleViewCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	
	var recipeId = $location.$$search.recipe;
	$scope.recipe = {};

	$http.get('http://localhost:3000/single-recipe?' + recipeId)
	.success(function(res){
		$scope.recipe = res[0];
	});

}]);
app.controller('singleViewCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	
	var recipeId = $location.$$search.recipe;
	$scope.recipe = {};

	$http.get('http://localhost:3000/single-recipe?' + recipeId)
	.success(function(res){
		// the response it sent as objects in an array.
		// this request should only return 1 object in an array. 
		$scope.recipe = res[0];
	});

}]);
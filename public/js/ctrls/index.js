app.controller('recipeFeedCtrl', ['$scope', '$http', function($scope, $http){
	
	$scope.recipes = [];

	$scope.name = 'Info coming from controller!';
	$http.get('http://localhost:3000/get-recipes')
	.then(function(res){
		$scope.recipes = res.data;
	});

}]);
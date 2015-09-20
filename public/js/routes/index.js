app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: '/views/index.html',
			controller: 'recipeFeedCtrl'
		})
		.when('/add-recipe', {
			templateUrl: '/views/add-recipe.html',
			controller: 'addRecipeCtrl'
		})
		.when('/view-recipe', {
			templateUrl: '/views/view-recipe.html',
			controller: 'singleViewCtrl'
		});
}]);
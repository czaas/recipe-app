app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: '/views/index.html',
			controller: 'recipeFeedCtrl'
		});
}]);
angular.module('recipeInputFields', [])
.controller('myController', function(){
	
})
.directive('recipeInput', function(){
	return {
		restrict: 'E', // This will always be called as "<recipe-input></recipe-input>"
		scope: true,
		transclude: true,
		replace: false,
		templateUrl: '/js/directives/recipe-fields/recipe-fields.html'
	};
});
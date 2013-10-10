(function(peopletest){

	peopletest.directive('main', ['people', function(people) {
		return {
			restrict: 'E',
			transclude: true,
			replace: true,
			template: document.getElementById('mainTemplate').innerHTML,
			link: function() {

			},
			controller: function($scope, $element) {
				
			}
		}
	}]);

	
})(angular.module('peopletest'))
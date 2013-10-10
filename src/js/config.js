angular.module('peopletest', ['ng']).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
	$locationProvider.html5Mode(false).hashPrefix('!'); 
	
	var main = {
		template: '<main></main>',
		title: 'Main Screen',
		controller: function(){ 
		}
	}

	$routeProvider.when('/', main);
	
}]).run(function($http, $rootScope /*Add Services */){ 
	

	$rootScope.level = 0; 

});
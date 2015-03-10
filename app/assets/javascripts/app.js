var angular_app = angular.module('angular_app', [
	'templates',
	'ngRoute',
	'ngResource',
	'controllers',
]);

angular_app.config(function($locationProvider, $routeProvider) {
		$locationProvider.html5Mode({
  		enabled: true,
  		requireBase: false
		});
		$routeProvider
			.when('/users', {
				templateUrl: 'index.html',
				controller: 'UsersController',
			})
			.when('/users/new', {
				templateUrl: 'new.html',
				controller: 'UsersController'
			})
});




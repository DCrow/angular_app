var angular_app = angular.module('angular_app', [
	'templates',
	'ngRoute',
	'ngResource',
	'controllers',
]);

angular_app.config(function($locationProvider, $routeProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: 'templates/index.html',
				controller: 'UsersController',
			})
			.when('/users/new', {
				templateUrl: 'templates/new.html',
				controller: 'UsersController'
			})
});




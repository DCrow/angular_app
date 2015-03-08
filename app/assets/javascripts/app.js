var angular_app = angular.module('angular_app',[
	'templates',
	'ngRoute',
	'ngResource',
	'controllers',
]);



var controllers = angular.module('controllers',[])
controllers.controller("UsersController", [
 '$scope',
 '$routeParams',
 '$location',
 '$resource',
  function($scope, $routeParams, $location, $resource){
	var Users = $resource('/users/:id', {id: '@id'})
	$scope.message = "HEY HEY"
	$scope.users = Users.query()
}]);

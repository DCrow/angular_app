var controllers = angular.module('controllers',[]);
controllers.controller("UsersController", [
 '$scope',
 '$routeParams',
 '$location',
 '$resource',
 '$http',
  function($scope, $routeParams, $location, $resource, $http){
	var Users = $resource('/users/:id', {id: '@id'})
	$scope.message = "HEY HEY"
	$scope.users = Users.query()
	$scope.newUser = {
		name: '',
		password: ''
	};
	$scope.submitNewUser = function() {
		$http.post('/users', this.newUser).
			success(function(data, status) {
				if (status == 201) {
					$scope.successMsg = "Success"
				} else {
				 	$scope.successMsg = "Not sure if Success"
				}
			}).
			error(function(data, status) {
				$scope.successMsg = "Failure"
		});
	};
}]);

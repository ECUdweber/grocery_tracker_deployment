'use strict';

angular.module('angularGroceryTrackerApp')
  .controller('MainCtrl', function ($scope, $location, $http) {
	 $scope.shoppingLists = [];    
    
    $scope.addToDo = function() {
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };
 
    $scope.removeToDo = function(index) {
    	$scope.todos.splice(index, 1);
    };
    
    $scope.refresh = function () {
	    $http.get('/shoppinglists').success(function (response) {    	
	    	$scope.shoppingLists = response;
	    });    	
 	 };    
    
    $scope.removeList = function (id) {    	
	    $http.delete('/shoppinglists/' + id).success(function (response) {    	
	    	$scope.refresh();
	    });    	
    };
        
    $scope.useList = function (id) {    	
	   $location.path("/use-list/" + id);
    };    
    
    $scope.editList = function (id) {    	
	   $location.path("/manage-list/" + id);
    };            
    
    $scope.refresh();    
  });

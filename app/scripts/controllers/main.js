'use strict';

angular.module('angularGroceryTrackerApp')
  .controller('MainCtrl', function ($scope, $location, $http, listsFactory) {
	 $scope.shoppingLists = [];    
    
    $scope.addToDo = function() {
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };
 
    $scope.removeToDo = function(index) {
    	$scope.todos.splice(index, 1);
    };

    $scope.refresh = function () {
        $scope.shoppingLists = listsFactory.query();
    };       
    
    $scope.removeList = function (_id) {  
        listsFactory.delete({id: _id}, function(data) {
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

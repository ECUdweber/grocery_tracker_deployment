'use strict';

angular.module('angularGroceryTrackerApp')
  .controller('MainCtrl', function ($scope) {
    
    $scope.addToDo = function() {
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };
    
    $scope.removeToDo = function(index) {
    	$scope.todos.splice(index, 1);
    };
    
    $scope.shoppingLists = [
		{id:0, name: 'Normal Weekly List', use_count: 23},
		{id:1, name: 'Dog Food', use_count: 2},
		{id:2, name: 'Chicken Dinner', use_count: 3},
		{id:3, name: 'Taco Dinner', use_count: 1}    
    ];
  });

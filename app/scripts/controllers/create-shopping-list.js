'use strict';

/**
 * @ngdoc function
 * @name angularGroceryTrackerApp.controller:CreateShoppingListCtrl
 * @description
 * # CreateShoppingListCtrl
 * Controller of the angularGroceryTrackerApp
 */
angular.module('angularGroceryTrackerApp')
  .controller('CreateShoppingListCtrl', function ($scope) {

    //console.log('Creating a new shopping list');
	 $scope.groceryList = {
	 	'listName': '',
	 	'items': []
	 };    
    
    $scope.listName = 'UNNAMED list';
    $scope.listItems = [];
    
    $scope.addItem = function() {
    	$scope.listItems.push($scope.item);
    	$scope.item = '';
    };  
    
    $scope.removeItem = function(index) {
    	$scope.listItems.splice(index, 1);
    }; 
    
	 $scope.doNothing = function () {
			// NOTHING
	 }; 
    
    $scope.saveList = function() {
		console.log('Would submit list to server for persistence. Items saving: ', $scope.listItems);    
    };    
    
  });

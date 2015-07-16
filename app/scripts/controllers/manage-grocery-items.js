'use strict';

/**
 * @ngdoc function
 * @name angularGroceryTrackerApp.controller:ManageGroceryItemsCtrl
 * @description
 * # ManageGroceryItemsCtrl
 * Controller of the angularGroceryTrackerApp
 */
angular.module('angularGroceryTrackerApp')
  .controller('ManageGroceryItemsCtrl', function ($scope) {
		$scope.item = {name: '',price: ''};
		
		$scope.items = [
		  {name: 'Eggs', price: '1.99'},
		  {name: 'Bread', price: '2.99'},
		  {name: 'Ground Beef', price: '5.23'},
		  {name: 'Cookie Crisp', price: '4.50'},
		  {name: 'Milk', price: '3.49'}
		];
    
	   $scope.addGroceryItem = function() {
			if(!$scope.item.name || $scope.item.name === '') { return; }	   	
	   	
	   	$scope.items.push($scope.item);
	   	$scope.item = {name: '',price: ''};
	   }
    
  });

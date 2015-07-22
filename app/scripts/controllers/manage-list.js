'use strict';

angular.module('angularGroceryTrackerApp')
  .controller('ManageListCtrl', function ($scope, $location, $routeParams, $http, listsFactory, itemsFactory) {  	
	$scope.currentListId = $routeParams.listId;  		
	$scope.newItem = '-1';		
	$scope.availableItems = [];			
	$scope.item = {};
		
	$scope.removeItemFromList = function (index) {
		$scope.list.items.splice(index, 1);	
	};  
	
	$scope.addItemToListFromDropdown = function () {
		$scope.list.items.push(angular.fromJson($scope.newItem,1));			
		$scope.newItem = -1;	
	};			
	
	$scope.saveList = function () {	
		($scope.currentListId) ? listsFactory.update({id: $scope.currentListId}, $scope.list) : listsFactory.save($scope.list);
		// Saved this list. Send back to grocery lists list
		$location.path("/#");
	};	
	
	$scope.updateAvailableItems = function () {
		$scope.availableItems = itemsFactory.query();
	};
	
	$scope.addItemToList = function () {
		$scope.list.items.push($scope.item);

		itemsFactory.save($scope.item);
		$scope.updateAvailableItems();

		$scope.item = {};	
	};
	
	$scope.list = ($scope.currentListId) ? listsFactory.get({id: $scope.currentListId}) : {name: '',use_count: 0,items: []};

	$scope.updateAvailableItems();		 		    
  });
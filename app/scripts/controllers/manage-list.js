'use strict';

angular.module('angularGroceryTrackerApp')
  .controller('ManageListCtrl', function ($scope, $location, $routeParams, $http) {
  	
		$scope.currentListId = $routeParams.listId;  		
		$scope.newItem = '-1';
		$scope.availableItems = [];
		
		$http.get('/items/').success(function (response) {    	
			$scope.availableItems = response;
		});					
		
		$scope.item = {};
  		$scope.list = {name: '',use_count: 0,items: []};		  		
  		
		$scope.removeItemFromList = function (index) {
			console.log("Would remove this item from the list.");
			$scope.list.items.splice(index, 1);	
		};  
		
		$scope.addItemToListFromDropdown = function () {
			$scope.list.items.push(angular.fromJson($scope.newItem,1));
			console.log("Adding item to list from dropdown: ", $scope.newItem);
			
			$scope.newItem = -1;	
		};			
		
		$scope.saveList = function () {				
			if(!$scope.currentListId) {
				// use http post to create a new list
				$http.post('/shoppinglists', $scope.list);
			}
			else {
				// use http put for an update			
				$http.put('/shoppinglists/' + $scope.currentListId, $scope.list);				
			}			
			// Saved this list. Send back to grocery lists list
			$location.path("/#");
		};	
		
		
		$scope.addItemToList = function () {
			$scope.list.items.push($scope.item);
			$http.post('/items', $scope.item);
			$scope.item = {};	
		};
		
		if($scope.currentListId) {
			$http.get('/shoppinglists/' + $scope.currentListId).success(function (response) {    	
				$scope.list = response;
			});		
		}		 		
    
  });

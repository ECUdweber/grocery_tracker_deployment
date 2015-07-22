'use strict';

angular.module('angularGroceryTrackerApp')
  .controller('EditGroceryItemCtrl', function ($scope, $location, $routeParams, $http, itemsFactory) {
  		$scope.item = {};
  		$scope.itemId = $routeParams.itemId;
  	
	    $scope.refresh = function () {		
			$scope.item = itemsFactory.get({id: $scope.itemId});
	    };
	   
		$scope.saveGroceryItem = function () {
			itemsFactory.update({id: $scope.itemId}, $scope.item);
			$location.path("/manage-grocery-items");	      
	    };
	   
    	$scope.refresh();
  });

'use strict';

angular.module('angularGroceryTrackerApp')
  .controller('ManageGroceryItemsCtrl', function ($scope, $location, $http, itemsFactory) {
	$scope.item = {name: '',price: ''};		
	$scope.items = [];

	$scope.addGroceryItem = function() {
		if(!$scope.item.name || $scope.item.name === '') { return; }	   	
		
		itemsFactory.save($scope.item, function (data) {
			$scope.refresh();
		});  			
	};

	$scope.deleteItem = function (_id) {
        itemsFactory.delete({id: _id}, function(data) {
            $scope.refresh();
        });		
	};

	$scope.editItem = function (id) {
		$location.path("/edit-grocery-item/" + id);   
	};

	$scope.refresh = function () {
		$scope.items = itemsFactory.query();
		$scope.item = {name: '',price: ''};	   	
	};
	      
	$scope.refresh();
  });

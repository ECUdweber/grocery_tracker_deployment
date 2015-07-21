'use strict';

angular.module('angularGroceryTrackerApp')
  .controller('ManageGroceryItemsCtrl', function ($scope,$location,$http) {
		$scope.item = {name: '',price: ''};		
		$scope.items = [];
    
	   $scope.addGroceryItem = function() {
			if(!$scope.item.name || $scope.item.name === '') { return; }	   	
	   	$http.post('/items', $scope.item);
	   	
	   	$scope.refresh();
	   };
	   
	   $scope.deleteItem = function (id) {
			$http.delete('/items/' + id);	
			$scope.refresh();	   	
	   };
	   
	   $scope.editItem = function (id) {
	   	$location.path("/edit-grocery-item/" + id);   
	   };
	   
	   $scope.refresh = function () {
			$http.get('/items/').success(function (response) {    	
				$scope.items = response;
			});	
			$scope.item = {name: '',price: ''};	   	
	   };
	      
    	$scope.refresh();
  });

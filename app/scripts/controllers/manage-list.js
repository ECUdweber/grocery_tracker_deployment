'use strict';

/**
 * @ngdoc function
 * @name angularGroceryTrackerApp.controller:ManageListCtrl
 * @description
 * # ManageListCtrl
 * Controller of the angularGroceryTrackerApp
 */
angular.module('angularGroceryTrackerApp')
  .controller('ManageListCtrl', function ($scope, $routeParams) {
  	
		$scope.currentList = $routeParams.listId;  	
  	
    
  });

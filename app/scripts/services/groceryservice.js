'use strict';

/**
 * @ngdoc service
 * @name angularGroceryTrackerApp.Groceryservice
 * @description
 * # Groceryservice
 * Service in the angularGroceryTrackerApp.
 */
angular.module('angularGroceryTrackerApp')
  .service('ShoppingListsService', function ShoppingListsService($resource) {
	return $resource('/shoppinglists/' + ':id',
		{id:'@id'},
		{'update': {method:'PUT'}}
	);
  });
'use strict';
/**
 * @ngdoc service
 * @name angularGroceryTrackerApp.groceryFactory
 * @description
 * # groceryFactory
 * Factory in the angularGroceryTrackerApp.
 */
angular.module('angularGroceryTrackerApp')
  .factory('listsFactory', function listsFactory($resource) {
    return $resource('/shoppinglists/' + ':id',
      {id:'@id'},
      {'update': {method:'PUT'}}
    );
  })
  .factory('itemsFactory', function itemsFactory($resource) {
    return $resource('/items/' + ':id',
      {id:'@id'},
      {'update': {method:'PUT'}}
    );
  });      
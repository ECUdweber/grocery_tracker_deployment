'use strict';

angular
  .module('angularGroceryTrackerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/detail', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .when('/create-shopping-list', {
        templateUrl: 'views/manage-list.html',
        controller: 'ManageListCtrl'
      })
      .when('/manage-grocery-items', {
        templateUrl: 'views/manage-grocery-items.html',
        controller: 'ManageGroceryItemsCtrl'
      })
      .when('/manage-list/:listId', {
        templateUrl: 'views/manage-list.html',
        controller: 'ManageListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

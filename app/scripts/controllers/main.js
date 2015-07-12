'use strict';

/**
 * @ngdoc function
 * @name angularGroceryTrackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGroceryTrackerApp
 */
angular.module('angularGroceryTrackerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

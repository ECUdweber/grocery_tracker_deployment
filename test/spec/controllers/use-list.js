'use strict';

describe('Controller: UseListCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGroceryTrackerApp'));

  var UseListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UseListCtrl = $controller('UseListCtrl', {
      $scope: scope
    });
  }));

	/*
  it('should start with an empty list', function () {
    expect(scope.list.length).toBe(0);
  });
  */
  
});
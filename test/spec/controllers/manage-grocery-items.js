'use strict';

describe('Controller: ManageGroceryItemsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGroceryTrackerApp'));

  var ManageGroceryItemsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManageGroceryItemsCtrl = $controller('ManageGroceryItemsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

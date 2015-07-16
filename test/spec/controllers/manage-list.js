'use strict';

describe('Controller: ManageListCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGroceryTrackerApp'));

  var ManageListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManageListCtrl = $controller('ManageListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

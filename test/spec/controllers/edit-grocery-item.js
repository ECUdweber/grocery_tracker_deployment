'use strict';

describe('Controller: EditGroceryItemCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGroceryTrackerApp'));

  var EditGroceryItemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditGroceryItemCtrl = $controller('EditGroceryItemCtrl', {
      $scope: scope
    });
  }));

/*
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
*/  
  
});

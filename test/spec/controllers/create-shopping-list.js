'use strict';

describe('Controller: CreateShoppingListCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGroceryTrackerApp'));

  var CreateShoppingListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateShoppingListCtrl = $controller('CreateShoppingListCtrl', {
      $scope: scope
    });
  }));


  it('should start with an empty list', function () {
    expect(scope.listItems.length).toBe(0);
  });
  
  it('should add grocery items to the list', function () {
  	 scope.todo = 'Test 1';
  	 scope.addItem();
    expect(scope.listItems.length).toBe(1);
  });  
  
  it('should then remove an item from the list', function () {
  	 scope.todo = 'Test 1';
  	 scope.addItem();
  	 scope.removeItem(0);
    expect(scope.listItems.length).toBe(0);
  }); 
   
  
});
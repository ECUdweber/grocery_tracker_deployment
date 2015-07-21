'use strict';

angular.module('angularGroceryTrackerApp')
  .controller('UseListCtrl', function ($scope, $location, $routeParams, $http) {
      $scope.list = {};
  	  $scope.listId = $routeParams.listId;  	
  	  $scope.recipient = '-1';	
  	  $scope.contact = {};

  	  $scope.emailInfo = {
  	  	name: '',
  	  	listId: $scope.listId,
  	  	email: ''
  	  }; 	  

  	  $scope.contacts = [
  	  	{id: 1, name: 'Daniel', email: 'daniel@bitlathe.com'},
  	  	{id: 2, name: 'Tanya', email: 'td@thedanielweber.com'}
  	  ];
  		
	   $scope.refresh = function () {
			$http.get('/shoppinglists/' +  $scope.listId).success(function (response) {    	
				$scope.list = response;
				
				$scope.total = _(response.items)
					.chain()
					.map(function(item) {
						return item.price - 0;
					})
					.reduce(function(memo, num) {
						return memo + num;	
					}, 0)
					.value();									
			});					   	
	   };
	   
	   $scope.updateRecipient = function () {
			// Send email to contact			
			var recip = angular.fromJson($scope.recipient,1);

			$scope.emailInfo.email = recip.email;
			$scope.emailInfo.name = recip.name;
		};

	   $scope.sendLink = function () {
			// Send email to contact
			$http.post('/senditems', $scope.emailInfo);	 
			$scope.list.use_count++;  
			$http.put('/shoppinglists/' + $scope.listId, $scope.list);				
		};	
	   
	   $scope.refresh();  		
  });

'use strict';

angular.module('angularGroceryTrackerApp')
  .controller('UseListCtrl', function ($scope, $location, $routeParams, $http, listsFactory) {
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
	   		$scope.list = listsFactory.get({id: $scope.listId}, function(data) {
				$scope.total = _(data.items)
					.chain()
					.map(function(item) {
						return item.price - 0;
					})
					.reduce(function(memo, num) {
						return memo + num;	
					}, 0)
					.value();	

					$scope.emailInfo.list = data.items;						   			
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
			listsFactory.update({id: $scope.listId}, $scope.list);
		};	
	   
	   $scope.refresh();  		
  });

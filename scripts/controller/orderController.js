angular.module('myapp')
	.controller('orderCtrl', [
			'$scope',
			'$http',
			'$state','$window',
      'sharedService','Notification', function (
		  $scope,
			$http,
			$state,
			$window,
      sharedService,
			Notification) {

	   var init = function init() {
       $scope.orderList = {};
       var loggedInUser =JSON.parse($window.sessionStorage.getItem("loggedInUser"));

        var url = "http://localhost:8080/FreshFoods/rest/order/getOrderByUserId?id="+loggedInUser;
 			  $http.get(url).then(
 			  function(payload) {
 			      $scope.orderList = (payload.data);
            console.log(payload.data);
 			  }, function(error){
 			      console.log(error);
 			  });

	   };

		 	init();
 }]);

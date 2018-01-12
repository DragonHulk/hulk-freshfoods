angular.module('myapp')
	.controller('orderCtrl', [
			'$scope',
			'$http',
			'$state',
			'$window',
      'sharedService',
			'Notification',
			'serviceCall', function (
		  $scope,
			$http,
			$state,
			$window,
      sharedService,
			Notification,
			serviceCall) {

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

		 $scope.cancelOrder = function cancelOrder(order){
			 orderid = order.id;
			 var url = "http://localhost:8080/FreshFoods/rest/order/changeDeliveryStatusByOrderId?id="+orderid+"&status=4";
			 $http.put(url).then(
			 function(payload) {
				 var index = $scope.orderList.indexOf(order);
				 $scope.orderList.splice(index, 1);
				 //$scope.orderList = (payload.data);
				 Notification.primary("your order has been canceled");
			 }, function(error){
					 console.log(error);
			 });
		 }
		 $scope.initCap = function initCap(str){
			return str.charAt(0).toUpperCase()+str.slice(1);
		}

		 	init();
 }]);

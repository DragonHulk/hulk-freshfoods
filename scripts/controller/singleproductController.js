angular.module('myapp')
	.controller('singleproductCtrl', [
			'$scope',
			'$http',
			'$state',
			'$window',
      'sharedService',
			'serviceCall',
			'Notification',
			'modalService', function (
		  $scope,
			$http,
			$state,
      $window,
      sharedService,
      serviceCall,
			Notification,
			modalService) {

	   var init = function init() {
       $scope.singleproduct = {};
       $scope.order = {};
       var productId = $state.params.id;
        if (productId){
          serviceCall.getproductbyid(productbyid,productId);
        }
	   };

     function productbyid(payload){
       $scope.singleproduct = payload.data[0];
       console.log($scope.singleproduct)
     }

    	function generateOrderId() {
      	return  Math.random().toString(25).substr(2, 10);
    	};

    	$scope.buy = function buy(quantity,singleproduct){
				modalService.showModal(quantity,singleproduct,cbpay);
     }

		 function cbpay(result,quantity){
			 if(result){
				$scope.order.order_id = generateOrderId();
       	$scope.order.total_price = $scope.singleproduct.price * quantity;
       	$scope.order.userid = JSON.parse($window.sessionStorage.getItem("loggedInUser"));
       	$scope.order.delivery_status = 1;
       	var url = "http://localhost:8080/FreshFoods/rest/order/newOrder";
       	$http.post(url,$scope.order).then(
 					function(payload) {
 						Notification.primary(payload.data);
 					}, function(error){
 						console.log(error);
 					});
			 }
		 }

			init();
 }]);

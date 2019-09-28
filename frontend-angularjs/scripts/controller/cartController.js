angular.module('myapp')
	.controller('cartCtrl', [
			'$scope',
			'$state',
			'$window',
			'$http',
			'Notification',
			'serviceCall',
			'modalService',
			'$filter',function (
		  $scope,
			$state,
			$window,
			$http,
			Notification,
			serviceCall,
			modalService,
			$filter) {

        function init(){
					$scope.order = {};
					$scope.user = {};
					$scope.date = new Date();
					$scope.cart = {};
					var total;
					var id = parseInt($window.sessionStorage.getItem("loggedInUser"));
					serviceCall.getAllProductsInCartByUserid(cbsCart,id);
					serviceCall.getUserDetailById(cbSucessUser,id)
        }

				function cbSucessUser(payload) {
	 			 var user =  payload.data;
	 			 $scope.user = user[0];
	 		 }

				function generateOrderId() {
	      	return  Math.random().toString(25).substr(2, 10);
	    	};

				function calculateTotal(){
					var total = 0;
					var sum = 0;
					$scope.cartproduct.forEach(function(cartproduct){
						sum =cartproduct.quantity * cartproduct.product.price;
						total =sum + total;
					});
					$scope.cart.total = total;
				}

				function cbsCart(payload){
					$scope.cartproduct = (payload.data);
					calculateTotal();
				}

				$scope.remove = function remove(product){
					var id = product.id;
					var url = "http://localhost:8080/FreshFoods/rest/cart/deleteFromCartByid?id="+id;
	  			$http.delete(url).then(
						function(payload) {
							var index = $scope.cartproduct.indexOf(product);
		 					$scope.cartproduct.splice(index, 1);
							Notification.primary(payload.data);
						}, function(error){
								Notification.error(error);
							});
				}

				$scope.placeOrder = function placeOrder(){
						modalService.showOrderModal(cbpay);
				}

				function cbpay(result,quantity){
	 			 if(result){
	 					$scope.order.order_id = generateOrderId();
	 	      	$scope.order.total_price = $scope.cart.total;
	 	      	$scope.order.userid = $scope.user.userid;
	 	      	$scope.order.delivery_status = 1;
	 					$scope.order.date = $filter('date')($scope.date, "dd-MM-yyyy");
	 					modalService.confirmPayment($scope.user.money_balance,$scope.order.total_price,cbsConfirmPayment);
	 				}
	 		 }
	 		 function cbsConfirmPayment(result){
	 			 if(result){
	 				 if($scope.order.total_price <= $scope.user.money_balance){
	 					 var url = "http://localhost:8080/FreshFoods/rest/order/newOrder";
	 					 $http.post(url,$scope.order).then(
	 						 function(payload) {
	 							 Notification.primary(payload.data);
	 						 }, function(error){
	 								 console.log(error);
									 notification.error("Order not placed")
	 							 });
	 					 putAmountByUserId ();
						 clearCart();
	 				 }
	 				 else{
	  					Notification.primary("Insufficient Money in your wallet,to add money go to profile and add money");
	  				}
	 			 }
	 		 }

			 function putAmountByUserId(){
				 var	amount =$scope.user.money_balance - $scope.order.total_price;
				 var moneyUpdateUrl = "http://localhost:8080/FreshFoods/rest/userdetail/putAmountByUserId?"+
															 "id="+$scope.user.userid+"&amount="+amount;
				 $http.put(moneyUpdateUrl).then(
					 function(payload) {
						 Notification.primary(payload.data);
					 }, function(error){
							 Notification.error("some problem occured while debiting Your cash");
						 });
			 }

			 function clearCart(){
				 var id = $scope.user.userid;
				 var url = "http://localhost:8080/FreshFoods/rest/cart/deleteFromCartByUserid?userid="+id;
				 $http.delete(url).then(
					 function(payload) {
						 $scope.cartproduct = {};
						 Notification.primary(payload.data);
					 }, function(error){
							 console.log(error);
							 Notification.error("some problem occured while clearing your cart");
						 });
			 }

				$scope.initCap = function initCap(str){
					return str.charAt(0).toUpperCase()+str.slice(1);
				}

        init();
 }]);

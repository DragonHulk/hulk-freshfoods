angular.module('myapp')
	.controller('singleproductCtrl', [
			'$scope',
			'$http',
			'$state',
			'$window',
			'$filter',
      'sharedService',
			'serviceCall',
			'Notification',
			'modalService', function (
		  $scope,
			$http,
			$state,
      $window,
			$filter,
      sharedService,
      serviceCall,
			Notification,
			modalService) {

	   var init = function init() {
       $scope.singleproduct = {};
       $scope.order = {};
			 $scope.user = {};
			 $scope.date = new Date();
       var productId = $state.params.id;
        if (productId){
          serviceCall.getproductbyid(productbyid,productId);
        }
				var id = JSON.parse($window.sessionStorage.getItem("loggedInUser"));
				serviceCall.getUserDetailById(cbSucessUser,id);
	   };

		 function cbSucessUser(payload) {
			 var user =  payload.data;
			 $scope.user = user[0];
		 }

     function productbyid(payload){
       $scope.singleproduct = payload.data[0];
     }

    	function generateOrderId() {
      	return  Math.random().toString(25).substr(2, 10);
    	};

    	$scope.buy = function buy(quantity,singleproduct){
				modalService.showModal(quantity,singleproduct,cbpay);
     }

		 function cbpay(result,quantity){
			 $scope.quantity = quantity;
			 if(result){
					$scope.order.order_id = generateOrderId();
	      	$scope.order.total_price = $scope.singleproduct.price * quantity;
	      	$scope.order.userid = JSON.parse($window.sessionStorage.getItem("loggedInUser"));
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
								 Notification.error(error);
							 });
					 putAmountByUserId ();
					 putquantitybyid ($scope.quantity);
				 }
				 else{
 					Notification.primary("Insufficient Money in your wallet,"+
																"to add money go to profile and add money");
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
						 Notification.error(error);
					 });
		 }

		 function putquantitybyid (quantity){
			 var quantityRemaining = $scope.singleproduct.quantity-quantity;
			 var quantityUpdateUrl = "http://localhost:8080/FreshFoods/rest/product/putquantitybyid?"+
															 "id="+$scope.singleproduct.product_id+"&quantity="+quantityRemaining;
			 $http.put(quantityUpdateUrl).then(
				 function(payload) {
					 Notification.primary(payload.data);
					 $state.go('root.home.order');
				 }, function(error){
						 Notification.error(error);
					 });
		 }

		 $scope.addToCart = function addToCart(quantity,singleproduct){
			 var addToCartUrl = "http://localhost:8080/FreshFoods/rest/cart/addToCart?"+
				"userid="+$scope.user.userid+"&productid="+$scope.singleproduct.product_id+"&quantity="+quantity;
			 $http.post(addToCartUrl).then(
				 function(payload) {
					 Notification.primary(payload.data);
				 }, function(error){
						 Notification.error("enter a valid input");
					 });
		 }
		 $scope.initCap = function initCap(str){
			return str.charAt(0).toUpperCase()+str.slice(1);
		}
			init();
 }]);

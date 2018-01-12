angular.module('myapp')
	.controller('homeCtrl', [
			'$scope',
			'$state',
			'$http',
			'$window',
			'serviceCall',
			'sharedService',function (
		  $scope,
			$state,
			$http,
			$window,
			serviceCall,
			sharedService) {

	   var init = function init() {
			$scope.product = {};
			$scope.category = {};
			$scope.brands = {};
			$scope.user = {};

			var id = parseInt($window.sessionStorage.getItem("loggedInUser"));
			if(isNaN(id)){
				$state.go('root.login');
			}

			serviceCall.getallcategory(cbSucessCategory);
			serviceCall.getUserDetailById(cbSucessUser,id);

			var url1 = "http://localhost:8080/FreshFoods/rest/brands/getAllBrands";
			$http.get(url1).then(
				function(payload) {
          $scope.brands = payload.data;
				}, function(error){
					 Notification.error("Problem in getting all brands ");
				});
	   };

		 function cbSucessUser(payload) {
			 var user =  payload.data;
			 $scope.user = user[0];
		 }

		 function cbSucessCategory(payload) {
				$scope.category =  payload.data;
		 }

		 $scope.getProductByCategory = function getProductByCategory(category_id){
       var url = "http://localhost:8080/FreshFoods/rest/product/getproductbycategory?id="+category_id;
  			$http.get(url).then (
					function(payload) {
           $scope.product = (payload.data);
					 $state.go('root.home.product');
				 }, function(error){
            Notification.error("Problem in getting products by the category you requested ");
				 });
     }

		 $scope.getProductByBrand = function getProductByBrand(id){
       var url = "http://localhost:8080/FreshFoods/rest/product/getallproductbybrand?id="+id;
  			$http.get(url).then(
					function(payload) {
           $scope.product = (payload.data);
					 $state.go('root.home.product');
				 }, function(error){
           Notification.error("Problem in getting products by the Brand you requested ");
				 });
     }

		 $scope.getproductbysearchvalue = function getproductbysearchvalue(value){
			 var url = "http://localhost:8080/FreshFoods/rest/product/getallproductbysearch?value="+value+"";
			 $http.get(url).then(
			 function(payload) {
					$scope.product = (payload.data);
					$state.go('root.home.product');
			 }, function(error){
					Notification.error("Problem in getting products That you searched");
			 });
		 }

		 $scope.addMoney = function addMoney(){
			 $state.go('root.payment');
		 }

		 $scope.initCap = function initCap(str){
			return str.charAt(0).toUpperCase()+str.slice(1);
		}
			init();
 }]);

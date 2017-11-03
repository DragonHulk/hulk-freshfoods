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
			serviceCall.getUserDetailById(cbSucessUser,id)

			var url1 = "http://localhost:8080/FreshFoods/rest/brands/getAllBrands";
			$http.get(url1).then(
				function(payload) {
          $scope.brands = payload.data;
				}, function(error){
					 Notification.error({message:error, delay: 1000});
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
           console.log(error);
				 });
     }

		 $scope.getProductByBrand = function getProductByBrand(id){
       var url = "http://localhost:8080/FreshFoods/rest/product/getallproductbybrand?id="+id;
  			$http.get(url).then(
					function(payload) {
           $scope.product = (payload.data);
					 $state.go('root.home.product');
				 }, function(error){
           console.log(error);
				 });
     }
		 $scope.getallproduct = function getallproduct(){
			 var url = "http://localhost:8080/FreshFoods/rest/product/getallproduct"
			 $http.get(url).then(
			 function(payload) {
					$scope.product = (payload.data);
					$state.go('root.home.product');
			 }, function(error){
					console.log(error);
			 });
		 }
		 $scope.getproductbysearchvalue = function getproductbysearchvalue(value){
			 var url = "http://localhost:8080/FreshFoods/rest/product/getallproductbysearch?value="+value+"";
			 $http.get(url).then(
			 function(payload) {
					$scope.product = (payload.data);
					$state.go('root.home.product');
			 }, function(error){
					console.log(error);
			 });
		 }

			init();
 }]);

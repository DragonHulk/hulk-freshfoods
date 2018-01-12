angular.module('myapp')
	.controller('allproductCtrl', [
			'$scope',
			'$http',
			'$state',
      'sharedService', function (
		  $scope,
			$http,
			$state,
      sharedService) {

	   var init = function init() {
			 var url = "http://localhost:8080/FreshFoods/rest/product/getallproduct"
			 $http.get(url).then(
			  function(payload) {
			 		$scope.product = (payload.data);
			  }, function(error){
			 		console.log(error);
			  });
	   };

		 $scope.buyproduct = function buyproduct(id){
			 getproductbyid(id);
		 }

		 function getproductbyid(id){
			 	$state.go("root.home.singleproduct",{id:id});
		 }

		 $scope.initCap = function initCap(str){
			 return str.charAt(0).toUpperCase()+str.slice(1);
		 }


			init();
 }]);

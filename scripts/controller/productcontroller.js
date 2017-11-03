angular.module('myapp')
	.controller('productCtrl', [
			'$scope',
			'$state',function (
		  $scope,
			$state) {

		 $scope.buyproduct = function buyproduct(id){
			 getproductbyid(id);
		 }

		 function getproductbyid(id){
			 	$state.go("root.home.singleproduct",{id:id});
		 }

 }]);

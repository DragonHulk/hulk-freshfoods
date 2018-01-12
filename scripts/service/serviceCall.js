angular.module("myapp")
	.service("serviceCall",['$http',function ($http)
    {

      this.getallcategory = function getallcategory(cbSucessCategory){
        var url = "http://localhost:8080/FreshFoods/rest/category/getallcategory";
         $http.get(url).then(cbSucessCategory, function(error){
            return (error);
         });
     }

     this.getproductbyid = function getproductbyid(productbyid,productid){
       var url = "http://localhost:8080/FreshFoods/rest/product/getproductbyid?id="+productid+"";
        $http.get(url).then(productbyid, function(error){
           return (error);
        });
     }

     this.getUserDetailById = function getUserDetailById(cbSucessUser,id){
       var url = "http://localhost:8080/FreshFoods/rest/userdetail/getUserDetailById?id="+id;
       $http.get(url).then(cbSucessUser, function(error){
          return (error);
       });
     }

		 this.getAllProductsInCartByUserid = function getAllProductsInCartByUserid(cbsCart,id){
			 var url = "http://localhost:8080/FreshFoods/rest/cart/getAllProductsByUserid?id="+id;
 			$http.get(url).then(cbsCart, function(error){
 						console.log(error);
 					});
		 }
   }]);

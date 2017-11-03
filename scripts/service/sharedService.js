angular.module("myapp")
	.service("sharedService", function ()
    {
      var products;
			var loggedInUser = {};

      this.setproduct = function setproduct(product){
        products = product;
      };

      this.getproduct = function getproduct(){
        return products;
      };

			this.setUser = function setUser(id){
				loggedInUser.id = id;
			};

			this.getuser = function getuser(){
				return loggedInUser.id;
			};

    });

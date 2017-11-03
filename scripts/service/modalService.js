angular.module("myapp")
  .service("modalService",function () {
this.showModal = function showModal(quantity,prop,cbAfterModalConfirmation) {
  bootbox.confirm({
      title: prop.product_name,
      message: "Confirm your order<br>"+prop.product_name+"<br>quantity:"+quantity+"<br>price:"+prop.price,
      buttons: {
          cancel: {
              label: '<i class="fa fa-times"></i> Cancel'
          },
          confirm: {
              label: '<i class="fa fa-check"></i> Confirm'
          }
      },
      callback: function(result) {
        cbAfterModalConfirmation(result, quantity);
      }
  });
}
});

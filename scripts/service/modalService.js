angular.module("myapp")
  .service("modalService",function () {
this.showModal = function showModal(quantity,prop,cbAfterModalConfirmation) {
  bootbox.confirm({
      title: "Confirm your order",
      message: "Confirm your order<br>"+prop.product_name+"<br>quantity:"+quantity+"<br>price:"+prop.price*quantity,
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
this.showOrderModal = function showModal(cbAfterModalConfirmation) {
  bootbox.confirm({
      title: "Confirm your order",
      message: "Confirm your order",
      buttons: {
          cancel: {
              label: '<i class="fa fa-times"></i> Cancel'
          },
          confirm: {
              label: '<i class="fa fa-check"></i> Confirm'
          }
      },
      callback: function(result) {
        cbAfterModalConfirmation(result);
      }
  });
}
this.confirmPayment = function confirmPayment(balance,cost,cbAfterModalConfirmation) {
  bootbox.confirm({
      title: "Confirm Payment through FreshFoods Wallet money",
      message: "Your balance<br>"+balance+"<br>Total cost of order:"+cost,
      buttons: {
          cancel: {
              label: '<i class="fa fa-times"></i> Cancel'
          },
          confirm: {
              label: '<i class="fa fa-check"></i> Confirm'
          }
      },
      callback: function(result) {
        cbAfterModalConfirmation(result);
      }
  });
}
});

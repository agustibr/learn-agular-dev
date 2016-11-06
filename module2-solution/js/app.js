(function _(){
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.filter('isEmpty', isEmptyFilter)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  }
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
};

function isEmptyFilter () {
  return function(itemList) {
    if(itemList.length == 0) return true
    else return false
  }
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    { name:"cookies",   quantity:"10" },
    { name:"Donuts",    quantity:"2"  },
    { name:"milk",      quantity:"5"  },
    { name:"tomatoes",  quantity:"8"  },
    { name:"cheese",    quantity:"3"  },
    { name:"chocolate", quantity:"1"  }
  ];
  var alreadyBoughtItems = [];
  
  service.removeItem = function (itemIndex){
    var boughtItem = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex, 1);
    alreadyBoughtItems.push(boughtItem);
  };

  service.getToBuyItems = function() {
    return toBuyItems;
  };

  service.getBoughtItems = function() {
    return alreadyBoughtItems;
  };

}

})();
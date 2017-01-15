(function(){
  "use strict";

  angular.module('NarrowItDownApp', [])

  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', foundItemsDirective)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    
    var narrowItDown = this;

    narrowItDown.doNarrow = function() {
      MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm)
      .then(function(foundItems) {
        narrowItDown.found = foundItems;
      }, function() {
        narrowItDown.found = [];
      });
    }

    narrowItDown.removeItem = function(index) {
      narrowItDown.found.splice(index, 1);
    }

  }

  MenuSearchService.$inject = ['$http', '$q', 'ApiBasePath'];
  function MenuSearchService($http, $q, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      if (!searchTerm) {
        return $q.reject();
      }

      return $http
      .get(ApiBasePath + '/menu_items.json')
      .then(function(response) {
        return response.data.menu_items.filter(function(menuItem) {
          return menuItem.description.indexOf(searchTerm) >= 0;
        });
      });
    }
  }

  function foundItemsDirective() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundItems.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: function() {

      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'foundItemsCtrl',
      bindToController: true
    };
    return ddo;
  }

  function FoundItemsDirectiveController () {
    var foundList = this;
  }

})();
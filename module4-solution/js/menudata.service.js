(function(){
  "use strict";

  angular.module('data')
  .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com/')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath) {
    return {
      getAllCategories: function () {
        return $http({
          url: ApiBasePath + 'categories.json'
        });
      },

      getItemsForCategory: function (categoryShortName) {
        return $http({
          url: ApiBasePath + 'menu_items.json',
          params: {category: categoryShortName}
        });
      }
    }
  }
})();

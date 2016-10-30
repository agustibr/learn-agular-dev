(function _(){
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope){
  $scope.items = "";
  $scope.msg = "";
  $scope.sayWhat = function (items) {
    var numItems = items.split(",").length;
    if (items == "") $scope.msg = "Please enter data first";
    else if ( numItems <= 3) $scope.msg = "Enjoy!";
    else $scope.msg = "Too much!";
  };
});

})();
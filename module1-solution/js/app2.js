(function _(){
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope){
  $scope.items = "";
  $scope.msg = "";
  $scope.alertClass = ""
  $scope.sayWhat = function (items) {
    var numItems = items.split(",").length;
    if (items == "") {
      $scope.msg = "Please enter data first";
      $scope.alertClass = "alert-danger"
    } else if ( numItems <= 3) {
      $scope.msg = "Enjoy!";
      $scope.alertClass = "alert-success"
    } else {
      $scope.msg = "Too much!";
      $scope.alertClass = "alert-warning"
    } 
  };
  $scope.clearMsg = function () {
    $scope.msg = "";
    $scope.alertClass = ""
  };
});

})();
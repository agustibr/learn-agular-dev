(function () {
"use strict";

angular.module('public')
.controller('NewsletterController', NewsletterController);

NewsletterController.$inject = ['UserService'];
function NewsletterController(UserService) {
  var $ctrl = this;
  $ctrl.user = {};
  $ctrl.submitted = false;
  
  $ctrl.submit = function () {
    UserService.setUser($ctrl.user);
    $ctrl.submitted = true;
  };
}


})();

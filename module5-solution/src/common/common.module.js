// https://github.com/jhu-ep-coursera/restaurant-server

(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://coursera-restaurant-server-abr.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();

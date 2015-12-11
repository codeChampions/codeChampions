(function() {
  'use strict';

  angular
    .module('user')
    .factory('UserService', function($http, _){
      var logoutUrl = '/logout';
      var logout = function(){
        return $http.post(logoutUrl);
      };
      return {
        logout: logout
      };
    });
}());

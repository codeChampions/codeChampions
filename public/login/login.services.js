(function() {
  'use strict';

  angular
    .module('login')
    .factory('LoginService', function($http, $location, _){
      var loginUrl ='/login/';
      var login = function(userInfo){
        return $http.post(loginUrl, userInfo);
      };

      return{
          login: login
      };
    });
}());

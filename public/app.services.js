(function() {
  'use strict';

  angular
    .module('codeChampions')
    .factory('LoginService', function($http, _){
      var loginUrl ='/login';
      var login = function(userInfo){
        return $http.post(loginUrl, userInfo);
      };


      return{
          login: login,
      };
    })
    .factory('NewUserService', function($http, _){
      var newUserUrl = '/create-user';
      var createNewUser= function(newUserInfo){
        return $http.post(newUserUrl, newUserInfo);
      };
      return{
          createNewUser: createNewUser,
      };
    });
}());

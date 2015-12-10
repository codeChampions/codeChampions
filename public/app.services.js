(function() {
  'use strict';

  angular
    .module('codeChampions')
    .factory('LoginService', function($http, $location, _){
      var loginUrl ='/login';
      var login = function(userInfo){
      return $http.post(loginUrl, userInfo);
      };


      return{
          login: login,
      };
    })
    .factory('NewUserService', function($http, _){
      var newUserUrl = '/newUser';
      var createNewUser= function(newUserInfo){
        return $http.post(newUserUrl, newUserInfo);
      };
      return{
          createNewUser: createNewUser,
      };
    })
    .factory('UserService', function($http, _){
      var logoutUrl = '/logout';
      var logout = function(){
        return $http.post(logoutUrl);
      };
      return {
        logout: logout,
      };
    });

}());

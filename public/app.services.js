(function() {
  'use strict';

  angular
    .module('codeChampions')
    .factory('LoginService', function($http, $location, _){
      var loginUrl ='/login';
      var login = function(userInfo){
        return $http.post(loginUrl, userInfo).error(function(res){
          console.log(res);
          $location.path('/newUser');
        });
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
    });
}());

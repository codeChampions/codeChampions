(function() {
  'use strict';

  angular
    .module('newuser')
    .factory('NewUserService', function($http, _){
      var newUserUrl = '/newUser/';
      var createNewUser= function(newUserInfo){
        return $http.post(newUserUrl, newUserInfo);
      };
      return{
          createNewUser: createNewUser
      };
    });
}());

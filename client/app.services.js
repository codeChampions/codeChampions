(function() {
  'use strict';

  angular
    .module('codeChampions')
    .factory('LoginService', function($http, _){
      var loginUrl ='';
      var login = function(userInfo){
        console.log(userInfo);
        //$http.post(loginUrl, userInfo);
      };


      return{
          login: login,
      };
    })
    .factory('NewUserService', function($http, _){

    });
}());

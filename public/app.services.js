(function() {
  'use strict';

  angular
    .module('codeChampions')
    .factory('LoginService', function($http, $location, _){
      var loginUrl ='/login';
      var login = function(userInfo){
      return $http.post(loginUrl, userInfo).then(function (res) {console.log(res)});
        return $http.post(loginUrl + '/?username=' + userInfo.username + '&password=' + userInfo.password).then(function(res){console.log("good", res);},function(res){
          console.log(res);
//          $location.path('/newUser');
        });
      };


      return{
          login: login,
      };
    })
    .factory('NewUserService', function($http, _){
      var newUserUrl = '/newUser';
      var createNewUser= function(newUserInfo){
        return $http.post(newUserUrl, newUserInfo).success(function(res){
          console.log(res);
        });
      };
      return{
          createNewUser: createNewUser,
      };
    });
}());

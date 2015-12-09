(function() {
  'use strict';

  angular
    .module('codeChampions')
    .controller('MainController', function($scope){

    })
    .controller('LoginController', function($scope, LoginService){
        var vm = this;

        vm.login = function(userInfo){
          LoginService.login(userInfo);
        };
    })
    .controller('NewUserController', function($scope, NewUserService){
      var vm = this;

      vm.createNewUser = function(newUserInfo){
        console.log("in the controller");

        NewUserService.createNewUser(newUserInfo);
      };

    });
}());

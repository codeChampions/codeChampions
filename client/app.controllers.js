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

    });
}());

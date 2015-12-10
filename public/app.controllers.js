(function() {
  'use strict';

  angular
    .module('codeChampions')
    .controller('MainController', function($scope){

    })
    .controller('LoginController', function($scope, $location, LoginService){
        var vm = this;

        vm.login = function(userInfo){
          LoginService.login(userInfo).then(function(res){
            console.log("success");
            $location.path('/home');
          }, function(res){
            console.log("failed");
            $location.path('/newUser');
          });
        };
    })
    .controller('NewUserController', function($scope, NewUserService){
      var vm = this;

      vm.createNewUser = function(newUserInfo){
        console.log("in the controller");

        NewUserService.createNewUser(newUserInfo);
      };

    })
    
}());

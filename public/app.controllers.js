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
            var goOn = confirm(res.data.message + " Create new user?");
            if(goOn){
            $location.path('/newUser');
          }
          });
        };
    })
    .controller('NewUserController', function($scope, $location, NewUserService){
      var vm = this;

      vm.createNewUser = function(newUserInfo){
        console.log("in the controller");

        NewUserService.createNewUser(newUserInfo).then(function(res){
          console.log("successfully made new user");
          $location.path('/home');
        }, function(res){
          alert("failed to make new user");

        });
      };

    })
    
}());

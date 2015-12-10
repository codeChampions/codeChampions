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
            console.log(res);
            sessionStorage.setItem('username', res.config.data.username);
            $location.path('/home');
          }, function(res){
            if(res.data.status === 405){
              alert("Wrong Password. Please try again");
            }
            else if(res.data.status === 403){
              var goOn = confirm(res.data.message + " Create new user?");
              if(goOn){
              $location.path('/newUser');
            }
          }
          else{
            alert("Please enter both a username and Password");
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
    .controller('UserController', function($scope, $location, UserService){
      var vm = this;
      vm.currentUser = sessionStorage.getItem('username');
      vm.logout = function(){
        UserService.logout().then(function(){
          $location.path('/');
          sessionStorage.removeItem('username');
        });
      };
      });

}());

(function() {
  'use strict';

  angular
    .module('login')
    .controller('LoginController', function($scope, $location, LoginService){
        var vm = this;

        vm.login = function(userInfo){
          LoginService.login(userInfo).then(function(res){
            console.log(res.data.accessType);
            sessionStorage.setItem('userType', res.data.accessType);
            sessionStorage.setItem('username', res.data.username);
            sessionStorage.setItem('id', res.data.id);
            sessionStorage.setItem('avatar', res.data.avatar);
            sessionStorage.setItem('email', res.data.email);
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
    });


}());

(function() {
  'use strict';

  angular
    .module('newuser')
    .controller('NewUserController', function($scope, $location, NewUserService){
      var vm = this;

      vm.createNewUser = function(newUserInfo){
        NewUserService.createNewUser(newUserInfo).then(function(res){
          console.log("avatar" + res.data.avatar);
          console.log("successfully made new user");
          sessionStorage.setItem('userType', res.data.accessType);
          sessionStorage.setItem('username', res.data.username);
          sessionStorage.setItem('id', res.data.id);
          sessionStorage.setItem('avatar', res.data.avatar);
          sessionStorage.setItem('email', res.data.email);
          $location.path('/home');
        }, function(res){
          alert("failed to make new user");

        });
      };

    });

}());

(function() {
  'use strict';

  angular
    .module('newuser')
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

    });

}());

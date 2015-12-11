(function() {
  'use strict';

  angular
    .module('user')
    .controller('UserController', function($scope, $location, UserService){
      var vm = this;
      vm.currentUser = sessionStorage.getItem('username');
      vm.logout = function(){
        UserService.logout().then(function(){
          $location.path('/');
          sessionStorage.removeItem('username');
          sessionStorage.removeItem('id');
        });
      };
      });

}());

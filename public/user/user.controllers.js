(function() {
  'use strict';

  angular
    .module('user')
    .controller('UserController', function($scope, $location, $routeParams, UserService){
      var vm = this;
      vm.currentUser = sessionStorage.getItem('username');
      vm.email = sessionStorage.getItem('email');
      vm.id = sessionStorage.getItem('id');
      vm.accessType=sessionStorage.getItem('userType');
      vm.logout = function(){
        UserService.logout().then(function(){
          $location.path('/');
          sessionStorage.removeItem('username');
          sessionStorage.removeItem('id');
          sessionStorage.removeItem('userType');
          sessionStorage.removeItem('email');
        });
      };

      vm.edit = function(editInfo, id){
        console.log(editInfo + " stuff " + id);
        UserService.edit(editInfo, id).then(function(){sessionStorage.setItem('username', editInfo);}, function(res){
          alert(res.data.message);
        });
          console.log(editInfo);
          // console.log(res);

      };


    });

}());

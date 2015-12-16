(function() {
  'use strict';

  angular
    .module('user')
    .controller('UserController', function($scope, $location, UserService){
      var vm = this;
      vm.currentUser = sessionStorage.getItem('username');
      vm.id = sessionStorage.getItem('id');
      vm.logout = function(){
        UserService.logout().then(function(){
          $location.path('/');
          sessionStorage.removeItem('username');
          sessionStorage.removeItem('id');
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

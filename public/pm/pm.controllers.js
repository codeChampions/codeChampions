(function() {
  'use strict';

  angular
    .module('pm')
    .controller('PMController', function($scope, $location, PMService){
        var vm = this;

        vm.sendNewMessage =function(toName, newMessage){
          PMService.sendNewMessage(toName, newMessage).then(function(res){
            console.log(res);
          });
        };
      });
}());

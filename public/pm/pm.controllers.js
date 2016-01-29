(function() {
  'use strict';

  angular
    .module('pm')
    .controller('PMController', function($scope, $location, PMService){
        var vm = this;

        vm.username = sessionStorage.getItem('username');

        vm.sendNewMessage =function(replyUser, newMessage){
          angular.element(document).find('input[name="newMessage"]').val("");
          angular.element(document).find('input[name="replyUser"]').val("");
          PMService.sendNewMessage(replyUser, newMessage).then(function(res){
            console.log(res);
          });
        };
      });
}());

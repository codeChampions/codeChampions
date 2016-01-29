(function() {
  'use strict';

  angular
    .module('pm')
    .controller('PMController', function($scope, $location, PMService){
        var vm = this;

        vm.username = sessionStorage.getItem('username');

        vm.getPM = function(){
          PMService.getPM().then(function(res){
            vm.pm = _.filter(res.data, function(currVal){
              return currVal.replyId === 0;
            });
          });
        };
        vm.getPM();
        vm.sendNewMessage =function(replyUser, newMessage){
          angular.element(document).find('input[name="newMessage"]').val("");
          angular.element(document).find('input[name="replyUser"]').val("");
          PMService.sendNewMessage(replyUser, newMessage).then(function(res){
          });
        };

        vm.sendReply = function(replyUser, replyMessage, replyId){
          angular.element(document).find('input[name="replyMessage"]').val("");
          PMService.sendReply(replyUser, replyMessage, replyId).then(function(res){
            vm.getPM();
          });
        };
      });
}());

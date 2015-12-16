(function() {
  'use strict';

  angular
    .module('message')
    .controller('MessageController', function($scope, $location, MessageService){
      var vm = this;
      vm.currentUser = sessionStorage.getItem('username');
      vm.sendNewMessage = function(newMessage){
        MessageService.sendNewMessage(newMessage, vm.currentUser, 1);
      };

      vm.sendReply = function(replyMessage){

        MessageService.sendReply(replyMessage);
      };
      vm.check = function(){
        console.log("in message controller");
        MessageService.check();
      };
      vm.getMessages = function(){
        MessageService.getMessages(1).then(function(res){
          vm.messages = res.data;
          _.each(vm.messages, function(currVal, idx, arr){
            MessageService.getMessages(currVal.id).then(function(res){
              arr[idx].replies=res.data;
            });
          });
          console.log(vm.messages);
        });
    };
    vm.getMessages();
    });

}());

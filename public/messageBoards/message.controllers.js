(function() {
  'use strict';

  angular
    .module('message')
    .controller('MessageController', function($scope, $location, MessageService){
      var vm = this;
      if($location.url() === '/game'){
        vm.board = 1;
      }
      else if($location.url() === '/lesson'){
        vm.board = 3;
      }
      else{
        vm.board = 2;
      }
      vm.currentUser = sessionStorage.getItem('username');
      vm.sendNewMessage = function(newMessage){
        angular.element(document).find('input[name="message"]').val("");
        MessageService.sendNewMessage(newMessage, vm.currentUser, vm.board).then(function(res){
          vm.getMessages(vm.board);
        });
      };

      vm.sendReply = function(replyMessage, replyId){
        console.log("replyID: " + replyId);
        angular.element(document).find('input[name="replymessage"]').val("");
        MessageService.sendReply(replyMessage, replyId).then(function(res){
          vm.getMessages(vm.board);
        });
      };
      vm.check = function(){
        console.log("in message controller");
        MessageService.check();
      };
      vm.getMessages = function(boardId){
        MessageService.getMessages(boardId).then(function(res){
          vm.messages = res.data;
          _.each(vm.messages, function(currVal, idx, arr){
            MessageService.getMessages(currVal.id).then(function(res){
              arr[idx].replies=res.data;
            });
          });
          console.log(vm.messages);
        });
    };
    vm.getMessages(vm.board);
    });

}());

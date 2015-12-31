(function() {
  'use strict';

  angular
    .module('message')
    .controller('MessageController', function($scope, $location, MessageService, ClassService, $routeParams){
      var vm = this;

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
    //use regular expressions to find what kind of page we are in to get the right message boards
      if(/game/.test($location.url())){
        console.log("you are in a game");
        vm.board = 1;
        vm.getMessages(vm.board);
      }
      else if(/lesson/.test($location.url())){
        vm.board = 3;
        vm.getMessages(vm.board);
      }
      else{
        ClassService.getSingleClass($routeParams.classId).then(function(res){
          console.log(res.data.messageBoard.id);
          vm.board = res.data.messageBoard.id;
          vm.getMessages(vm.board);

        });
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

    //vm.getMessages(vm.board);
    });

}());

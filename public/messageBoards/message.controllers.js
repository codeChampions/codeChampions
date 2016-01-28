(function() {
  'use strict';

  angular
    .module('message')
    .controller('MessageController', function($scope, $location, MessageService, ClassService, $routeParams){
      var vm = this;
      //grab messages based on the boardID
      vm.username = sessionStorage.getItem('username');
      vm.userType = sessionStorage.getItem('userType');
      vm.getMessages = function(boardId){
        MessageService.getMessages(boardId).then(function(res){
          vm.messages = res.data;
          //find grab messages from board
          _.each(vm.messages, function(currVal, idx, arr){
            MessageService.getMessages(currVal.id).then(function(res){
              //get replies to each message
              arr[idx].replies=res.data;
            });
          });
        });
    };
    //use regular expressions to find what kind of page we are in to get the right message boards
      if(/game/.test($location.url())){
        var myGameLoc = $location.url();
        switch (myGameLoc) {
          case "/game11":
            vm.board = 2;
            break;
          case "/game12":
            vm.board = 4;
            break;
          case "/game13":
            vm.board = 5;
            break;
          case "/game21":
            vm.board = 7;
            break;
          case "/game22":
            vm.board = 8;
            break;
          case "/game23":
            vm.board = 10;
            break;
          case "/game31":
            vm.board = 12;
            break;
          case "/game32":
            vm.board = 14;
            break;
          case "/game33":
            vm.board = 16;
            break;
          default:
            vm.board=1;
            console.log("you are not in a board");

        }
        vm.getMessages(vm.board);
      }
      else if(/lesson/.test($location.url())){
        var myLessonLoc = $location.url();
        switch (myLessonLoc) {
          case "/lesson11":
            vm.board = 1;
            break;
          case "/lesson12":
            vm.board = 3;
            break;
          case "/lesson21":
            vm.board = 6;
            break;
          case "/lesson22":
            vm.board = 9;
            break;
          case "/lesson31":
            vm.board = 11;
            break;
          case "/lesson32":
            vm.board = 13;
            break;
          case "/lesson33":
            vm.board = 15;
            break;
          default:
            vm.board=1;
            console.log("you are not in a board");
        }
        vm.getMessages(vm.board);
      }
      //search class boards if not a lesson or game
      else{
        ClassService.getSingleClass($routeParams.classId).then(function(res){
          vm.board = res.data.messageBoard.id;
          vm.getMessages(vm.board);

        });
      }

      vm.currentUser = sessionStorage.getItem('username');
      //send message
      vm.sendNewMessage = function(newMessage){
        angular.element(document).find('input[name="message"]').val("");
        MessageService.sendNewMessage(newMessage, vm.currentUser, vm.board).then(function(res){
          vm.getMessages(vm.board);
        });
      };
      //send reply to an existing message
      vm.sendReply = function(replyMessage, replyId){
        angular.element(document).find('input[name="replymessage"]').val("");
        MessageService.sendReply(replyMessage, replyId).then(function(res){
          vm.getMessages(vm.board);
        });
      };
      //delete message or reply from user who sent or admin
      vm.deleteMessage = function(messageId){
        MessageService.deleteMessage(messageId).then(function(res){
          vm.getMessages(vm.board);
        });
      };
    });

}());

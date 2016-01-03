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
        console.log(vm.board);
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
        console.log(vm.board);
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

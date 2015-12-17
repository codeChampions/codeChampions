(function() {
  'use strict';

  angular
    .module('codeChampions')
    .directive('messageBoard', function(){
      return {
        restrict: 'EA',
        templateUrl: 'common/views/messageboard.directive.html',
        controller: "MessageController as messageCtrl",
        scope: {
          message: '=',
          send: '&',
          reply: '&'
        },
      };


    });

}());

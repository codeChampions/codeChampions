(function() {
  'use strict';

  angular
    .module('game')
    .controller('GameController', function($scope, $location, GameService){
        var vm = this;
        vm.mode = 'Javascript';
      vm.aceOption = {
        mode: vm.mode.toLowerCase(),
        theme: 'monokai',
        onLoad: function(_ace){
          vm.modeChanged = function(){
            _ace.getSession().setMode("ace/mode/" + vm.mode.toLowerCase());
          };
        }
      };
      if($location.url()==='/game'){
      vm.aceModel = '//Javascript goes here \n moveDown();';
      vm.aceOriginal = '//Javascript goes here \n moveDown();';
      }
      else{
        vm.aceModel ='//edit using JavaScript\n // use this loop to move in the x-direction \n for(var x = 0; x < FILL_IN_VALUE; x++){ \n\n } \n //use this loop to move in the y-direction \n for(var y=0; y < FILL_IN_VALUE; y++){\n\n}';
        vm.aceOriginal = '//edit using JavaScript\n // use this loop to move in the x-direction \n for(var x = 0; x < FILL_IN_VALUE; x++){ \n\n } \n //use this loop to move in the y-direction \n for(var y=0; y < FILL_IN_VALUE; y++){\n\n}';
      }

      vm.run = function(){
        //eval($scope.aceModel);
        GameService.run(vm.aceModel);
      };
      vm.resetAce = function(){
        vm.aceModel = vm.aceOriginal;
      };

    });


}());

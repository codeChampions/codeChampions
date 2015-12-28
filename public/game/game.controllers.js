(function() {
  'use strict';

  angular
    .module('game')
    .controller('GameController', function($scope, $location, GameService, Game1Service, Game2Service, GamePlayService){
        var vm = this;
        vm.loc = $location.url();
        vm.mode = 'Javascript';

        //put everything in the correct starting position based on which game is being played
        vm.setGame = function(){
          console.log(vm.loc);
          switch (vm.loc) {
            case ('/game1'):
              Game1Service.setGame();
              break;
            case ('/game2'):
              Game2Service.setGame();
              break;
            case ('/game'):
              GameService.setGame();
              break;
              case ('/gamePlayground'):
                  GamePlayService.setGame();
                break;
            default:

          }
        };

        vm.setGame();
    //setting Ace Editor theme and modes
      vm.aceOption = {
        mode: vm.mode.toLowerCase(),
        theme: 'monokai',
        onLoad: function(_ace){
          vm.modeChanged = function(){
            _ace.getSession().setMode("ace/mode/" + vm.mode.toLowerCase());
          };
        }
      };

      vm.run = function(){
        vm.putCode();
        switch (vm.loc) {
          case ('/game'):
            GameService.run(vm.aceModel);
            break;
          case ('/game1'):
            Game1Service.run(vm.aceModel);
            break;
          case ('/game2'):
            Game2Service.run(vm.aceModel);
            break;
          case ('/gamePlayground'):
              GamePlayService.run(vm.aceModel);
            break;
          default:

        }

      };
      vm.resetAce = function(){
        vm.aceModel = vm.aceOriginal;
      };

      vm.getCode = function(){
        GameService.getCode().then(function(res){
          console.log(res.data.game1Code);
          vm.aceModel = res.data.game1Code;
          vm.lesson1Progress = res.data.lesson1Progress;
        });

      };

      vm.putCode = function(){
        switch (vm.loc) {
          case ('/game'):
              GameService.putCode(vm.aceModel);
            break;
          case ('/game1'):
              Game1Service.putCode(vm.aceModel);
            break;
          case ('/game2'):
              Game2Service.putCode(vm.aceModel);
            break;
          case ('/gamePlayground'):
              console.log('sup super cool admin who is making a video or something');
            break;
          default:

        }

      };

      vm.getCode();

    });


}());

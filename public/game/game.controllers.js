(function() {
  'use strict';

  angular
    .module('game')
    .controller('GameController', function($scope, $location, Game1_3Service, Game1_1Service, Game1_2Service, GamePlayService){
        var vm = this;
        $scope.playerName = "My Name";
        var playerName = "Me";
        $scope.otherName = "Other";
        var otherName = "Other";
        vm.loc = $location.url();
        vm.mode = 'Javascript';

        //put everything in the correct starting position based on which game is being played
        vm.setGame = function(){
          console.log(vm.loc);
          switch (vm.loc) {
            case ('/game11'):
              Game1_1Service.setGame();
              break;
            case ('/game12'):
              Game1_2Service.setGame();
              break;
            case ('/game13'):
              Game1_3Service.setGame();
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
          case ('/game13'):
            Game1_3Service.run(vm.aceModel);
            break;
          case ('/game11'):
            Game1_1Service.run(vm.aceModel);
            break;
          case ('/game12'):
            Game1_2Service.run(vm.aceModel);
            break;
          case ('/gamePlayground'):
              try{
                eval(vm.aceModel);

              }
            finally{
              console.log($scope.playerName);
              if (playerName !==""){
                $scope.playerName = playerName;
              }
              if (otherName !==""){
                $scope.otherName = otherName;
              }
              GamePlayService.run(vm.aceModel);}
            break;
          default:

        }

      };
      vm.resetAce = function(){
        vm.aceModel = vm.aceOriginal;
      };

      vm.getCode = function(){
        Game1_3Service.getCode().then(function(res){
          switch (vm.loc){
            case ('/game11'):
              vm.aceModel = res.data.game1_1Code;
              break;
            case ('/game12'):
              vm.aceModel = res.data.game1_2Code;
              break;
            case ('/game13'):
              vm.aceModel = res.data.game1_3Code;
              break;
          default:
        }
          vm.lesson1Progress = res.data.lesson1Progress;
        });

      };

      vm.putCode = function(){
        switch (vm.loc) {
          case ('/game13'):
              Game1_3Service.putCode(vm.aceModel);
            break;
          case ('/game11'):
              Game1_1Service.putCode(vm.aceModel);
            break;
          case ('/game12'):
              Game1_2Service.putCode(vm.aceModel);
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

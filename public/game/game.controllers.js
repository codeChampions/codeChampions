(function() {
  'use strict';

  angular
    .module('game')
    .controller('GameController', function($scope, $location, Game1_3Service, Game1_1Service, Game1_2Service, GamePlayService){
        var vm = this;
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
              vm.x = "";
              vm.y = "";
              vm.z = "";
              vm.xAns = "";
              vm.yAns = "";
              vm.zAns = "";
              vm.characterName = "";
              vm.character2Name = "";
              vm.openDoor = "";
              vm.closedDoor = "";
              vm.array = [];
              vm.arrlength = "";
              GamePlayService.setGame();
              break;
            default:
            console.log("nothing to set");

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

      // run the user's code
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
            var x="";
            var y="";
            var z="";
            var personName ="";
            var animalName = "";
            var doorOpen;
            var doorClosed;
            var pets = "";
            eval(vm.aceModel);
            vm.openDoor = doorOpen;
            vm.closedDoor = doorClosed;
            break;
          default:

        }

      };
      //reset the editor
      vm.resetGame = function(){
        switch (vm.loc) {
          case ('/game11'):
            Game1_1Service.resetGame();
            break;
          case ('/game12'):
            Game1_2Service.resetGame();
            break;
          case ('/game13'):
            Game1_3Service.resetGame();
            break;
          default:

        }
      };

      //set location for next button click
      vm.goNext = function(){
        switch (vm.loc) {
          case ('/game11'):
            Game1_1Service.goNext();
            break;
          case ('/game12'):
            Game1_2Service.goNext();
            break;
          case ('/game13'):
            Game1_3Service.goNext();
            break;
          default:

        }
      };
      //grab the student's code and put it into the editor if they have played the game before
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
            console.log("no code to get");
        }
          vm.lesson1Progress = res.data.lesson1Progress;
        });

      };
      //update the student's code in the user object in the server
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
          //this is only accessible to admins for trial purposes
              console.log('sup super cool admin who is making a video or something');
            break;
          default:
            console.log("no code to put");

        }

      };
      //start controller by grabbing user's code or the preset initial code
      vm.getCode();

    });


}());

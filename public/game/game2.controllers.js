(function() {
  'use strict';

  angular
    .module('game')
    .controller('Game2Controller', function($scope, $location, Game1_3Service, Game2_3Service, Game2_1Service, Game2_2Service){
        var vm = this;
        vm.loc = $location.url();
        vm.mode = 'Javascript';

        if (vm.loc === "/game21") {
          vm.animals={
          pig: "animal1",
          penguin: "animal2",
          owl: "animal3",
          turtle: "animal4"
        };
        var animal1 = "";
        var animal2 = "";
        var animal3 = "";
        var animal4 ="";

      }

      if (vm.loc === "/game22")  {
        vm.game22Ans={
          myGreeting: "Welcome",
          xVal: "",
          yVal: "",
          ansVal: "",
          friendly: ""
        };

        var greeting = "";
        var x = "";
        var y = "";
        var ans = "";
        var isFriendly = "";
      }


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

      vm.resetGame = function(){
        switch (vm.loc) {
          case ('/game21'):
            Game2_1Service.resetGame();
            break;
          case ('/game22'):
            Game2_2Service.resetGame();
            break;
          case ('/game23'):
            Game2_3Service.resetGame();
            break;
          default:

        }
      };
      vm.goNext = function(){
        switch (vm.loc) {
          case ('/game21'):
            Game2_1Service.goNext();
            break;
          case ('/game22'):
            Game2_2Service.goNext();
            break;
          case ('/game23'):
            Game2_3Service.goNext();
            break;
          default:

        }
      };
      // run the user's code
      vm.run = function(){
        vm.putCode();
        switch (vm.loc) {
          case ('/game23'):
            Game2_3Service.run(vm.aceModel);
            break;
          case ('/game21'):

            eval(vm.aceModel);

            vm.animals={
              pig: animal1,
              penguin: animal2,
              owl: animal3,
              turtle: animal4
            };

            Game2_1Service.run(vm.aceModel);

            break;
          case ('/game22'):
              eval(vm.aceModel);

              vm.game22Ans={
                myGreeting: greeting,
                xVal: x,
                yVal: y,
                ansVal: x + y,
                friendly: isFriendly
              };
            Game2_2Service.run(vm.aceModel);

            break;
          default:
            console.log("There is nothing to run");

        }

      };
      //grab the student's code and put it into the editor if they have played the game before
      vm.getCode = function(){
        Game1_3Service.getCode().then(function(res){
          switch (vm.loc){
            case ('/game21'):
              vm.aceModel = res.data.game2_1Code;
              break;
            case ('/game22'):
              vm.aceModel = res.data.game2_2Code;
              break;
            case ('/game23'):
              vm.aceModel = res.data.game2_3Code;
              console.log(res.data);
              break;
          default:
            console.log("no code to get");
        }
          // vm.lesson1Progress = res.data.lesson1Progress;
        });

      };
      //update the student's code in the user object in the server
      vm.putCode = function(){
        switch (vm.loc) {
          case ('/game23'):
              Game2_3Service.putCode(vm.aceModel);
            break;
          case ('/game21'):
              Game2_1Service.putCode(vm.aceModel);
            break;
          case ('/game22'):
              Game2_2Service.putCode(vm.aceModel);
            break;
          default:
            console.log("no code to put");

        }

      };

      vm.getCode();

    });


}());

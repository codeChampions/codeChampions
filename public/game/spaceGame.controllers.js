(function() {
  'use strict';

  angular
  .module('game')
  .controller('Space1Controller', function($scope, $location, SpaceGame1Service){
    var vm = this;
    vm.loc = $location.url();
    vm.mode = 'JavaScript';
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

          SpaceGame1Service.run(vm.aceModel);
      };


      vm.resetAce = function(){
        vm.aceModel = vm.aceOriginal;
      };

      // vm.getCode = function(){
      //   Game1_3Service.getCode().then(function(res){
      //     switch (vm.loc){
      //       case ('/game11'):
      //         vm.aceModel = res.data.game1_1Code;
      //         break;
      //       case ('/game12'):
      //         vm.aceModel = res.data.game1_2Code;
      //         break;
      //       case ('/game13'):
      //         vm.aceModel = res.data.game1_3Code;
      //         break;
      //     default:
      //       console.log("no code to get");
      //   }
      //     vm.lesson1Progress = res.data.lesson1Progress;
      //   });
      //
      // };

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
            console.log("no code to put");

        }

      };

      // vm.getCode();


  })

  .controller('Space2Controller', function($scope, $location, SpaceGame2Service){
    var vm = this;
    vm.loc = $location.url();
    vm.mode = 'JavaScript';
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

          SpaceGame2Service.run(vm.aceModel);
      };

      vm.resetAce = function(){
        vm.aceModel = vm.aceOriginal;
      };

      // vm.getCode = function(){
      //   Game1_3Service.getCode().then(function(res){
      //     switch (vm.loc){
      //       case ('/game11'):
      //         vm.aceModel = res.data.game1_1Code;
      //         break;
      //       case ('/game12'):
      //         vm.aceModel = res.data.game1_2Code;
      //         break;
      //       case ('/game13'):
      //         vm.aceModel = res.data.game1_3Code;
      //         break;
      //     default:
      //       console.log("no code to get");
      //   }
      //     vm.lesson1Progress = res.data.lesson1Progress;
      //   });
      //
      // };

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
            console.log("no code to put");

        }

      };

      // vm.getCode();


  })

  .controller('Space3Controller', function($scope, $location, SpaceGame3Service){
    var vm = this;
    vm.loc = $location.url();
    vm.mode = 'JavaScript';
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

          SpaceGame3Service.run(vm.aceModel);
      };


      vm.resetAce = function(){
        vm.aceModel = vm.aceOriginal;
      };

      // vm.getCode = function(){
      //   Game1_3Service.getCode().then(function(res){
      //     switch (vm.loc){
      //       case ('/game11'):
      //         vm.aceModel = res.data.game1_1Code;
      //         break;
      //       case ('/game12'):
      //         vm.aceModel = res.data.game1_2Code;
      //         break;
      //       case ('/game13'):
      //         vm.aceModel = res.data.game1_3Code;
      //         break;
      //     default:
      //       console.log("no code to get");
      //   }
      //     vm.lesson1Progress = res.data.lesson1Progress;
      //   });
      //
      // };

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
            console.log("no code to put");

        }

      };

      // vm.getCode();


  });


}());

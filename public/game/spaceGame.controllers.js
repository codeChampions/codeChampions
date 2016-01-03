(function() {
  'use strict';

  angular
  .module('game')
  .controller('Space1Controller', function($scope, $location, SpaceGame1Service){
    var vm = this;
    vm.loc = $location.url();
    vm.mode = 'JavaScript';
    vm.finished = false;
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
        SpaceGame1Service.run(vm.aceModel);
      };


      vm.resetAce = function(){
        vm.aceModel = vm.aceOriginal;
      };

      vm.getCode = function(){
        SpaceGame1Service.getCode().then(function(res){
              vm.aceModel = res.data.game3_1Code;
            })
      };

      vm.putCode = function(){
        SpaceGame1Service.putCode(vm.aceModel);
      };

      vm.getCode();


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
          vm.putCode();
          SpaceGame2Service.run(vm.aceModel);
      };

      vm.resetAce = function(){
        vm.aceModel = vm.aceOriginal;
      };

      vm.getCode = function(){
        SpaceGame2Service.getCode().then(function(res){
              vm.aceModel = res.data.game3_2Code;
            })
      };

      vm.putCode = function(){
        SpaceGame2Service.putCode(vm.aceModel);
      };

      vm.getCode();


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
          vm.putCode();
          SpaceGame3Service.run(vm.aceModel);
      };


      vm.resetAce = function(){
        vm.aceModel = vm.aceOriginal;
      };

      vm.getCode = function(){
        SpaceGame3Service.getCode().then(function(res){
              vm.aceModel = res.data.game3_3Code;
            })
      };

      vm.putCode = function(){
        SpaceGame3Service.putCode(vm.aceModel);
      };

      // vm.getCode();


  })
  .controller('SpacePlayController', function($scope, $location, SpacePlayService){
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

          SpacePlayService.run(vm.aceModel);
      };


      vm.resetAce = function(){
        vm.aceModel = vm.aceOriginal;
      };



  });


}());

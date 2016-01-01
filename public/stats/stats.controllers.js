(function() {
  'use strict';

  angular
    .module('stats')
    .controller('StatsController', function($scope, $location, StatsService){
      var vm = this;

      vm.getStats = function(){
        StatsService.getStats().then(function(res){
          vm.myStats=res.data;
        });

      };
      vm.getStats();


    });

}());

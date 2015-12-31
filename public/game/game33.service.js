(function() {
  'use strict';

  angular
  .module('space')
  .factory('SpaceGame3Service', function($http, $location){

    var player;
    var aliens;
    var bullets;
    var bulletTime = 0;
    var cursors;
    var fireButton;
    var explosions;
    var starfield;
    var firingTimer = 0;
    var stateText;
    var livingEnemies = 0;

  var preload = function() {


        game.load.image('sky', 'assets/Gamedevtuts_Free_Shmup_Sprites/Backgrounds/farback.gif');
        game.load.image('ship', 'assets/SpaceShipSmall.png', 32, 48);
        game.load.image('aliens', 'assets/ship (16).png', 40, 44);
        game.load.image('bullet', 'assets/projectile1.svg', 32, 32);
        game.load.image('kaboom', 'assets/exload01_2.png', 10, 10);
    }

    var create = function() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.sprite(0, 0, 'sky');

    player = game.add.sprite(32, game.world.height - 150, 'ship');

    game.physics.arcade.enable(player);

    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(30, 'bullet');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 1);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('checkWorldBounds', true);


    //  Player physics properties.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;


    aliens = game.add.group();
    aliens.enableBody = true;
    aliens.physicsBodyType = Phaser.Physics.ARCADE;

       createAliens();

    explosions = game.add.group();
    explosions.createMultiple(100, 'kaboom');
    explosions.forEach(setupInvader, this);


    cursors = this.input.keyboard.createCursorKeys();
  };

    var createAliens = function() {
        for (var y = 0; y < 1; y++)
        {
            for (var x = 0; x < 1; x++)
            {
                var alien = aliens.create(x * 200, y * 200, 'aliens');
                alien.anchor.setTo(0.5, 0.5);
                // alien.animations.add('fly', [ 0, 1, 2, 3 ], true);
                alien.play('fly', 10, true);
                alien.body.moves = false;
                livingEnemies++;
            }
        }
        aliens.x = 250;
        aliens.y = 80;
    };

    var scanForEnemy = function(){
      console.log(aliens.x);
      var alienPos = aliens.x;
      var playerPos = player.body.x;
      if(alienPos + 20 >= playerPos && alienPos -20 <= playerPos){
        console.log(true);
        return true;
      }
      else{
        console.log(false);
        return false;
      }
    };

    var setupInvader = function(invader){
        invader.anchor.x = 0.5;
        invader.anchor.y = 0.5;
    };

    var descend = function() {
        aliens.y += 10;
    };

    var firing = false;
    var fireLaser = function() {
       //  Grab the first bullet we can from the pool
       var bullet = bullets.getFirstExists(false);

       if (bullet)
       {   //  And fire it
         bullet.reset(player.x, player.y + 8);
         bullet.body.velocity.y = -400;
         bulletTime = game.time.now + 200;
         firing = true;
       }
    };

    var collisionHandler = function(bullet, alien, explosion) {

            //  When a bullet hits an alien we kill them both
            bullet.kill();
            alien.kill();
            livingEnemies--;

          var explosion = explosions.getFirstExists(false);
           explosion.reset(alien.body.x, alien.body.y);
           explosion.play('kaboom', 100, false, true);

           explosion.kill();

         };

    var mobilizeRight = function(amount){
        rightMove = true;
        numRight++;
    };

    var attack = function(){
      mobilizeRight();
      setTimeout(function(){
        fireLaser();
      }, 1000);

  };

    var update = function() {

        player.body.velocity.x = 0;
       player.body.velocity.y = 0;
      //  console.log("updating");

        if (rightMove)
         {
            //  Move to the left
            console.log(numRight);
           player.body.velocity.x = 40000*numRight;
           console.log(numRight);
           console.log("once moved" + player.body.x);

          player.animations.play('right', 10, true);
          rightMove = false;
          numRight= 0;
         }

        game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);

      }


    var game = new Phaser.Game(600, 400, Phaser.AUTO, 'game', { preload: preload, create: create, createAliens: createAliens, setupInvader: setupInvader, descend: descend, update: update, fireLaser: fireLaser, collisionHandler: collisionHandler, resetBullet: resetBullet });

        var run = function(input){
         //var myX=0;
          // var game = new Phaser.Game(600, 400, Phaser.AUTO, 'game', { preload: preload, create: create, createAliens: createAliens, setupInvader: setupInvader, descend: descend, update: update, fireLaser: fireLaser, collisionHandler: collisionHandler, resetBullet: resetBullet });
        //while(myX<20){
        console.log("starting " + player.body.x);

        eval(input);
        setTimeout(function(){
        try{
          if (livingEnemies > 0) throw "You did not get the aliens!";
      }
      catch(err){
        console.log(err);
      }
    },2000);

    };




    return {
      run: run
    };
});

}());

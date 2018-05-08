// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
   
};
// enemy position
const enemy1 = new Enemy(-100, 60, 20);
const enemy2 = new Enemy(-350, 140, 35);
const enemy3 = new Enemy(-20, 220, 50);
const enemy4 = new Enemy(-250, 310, 25);

const allEnemies = [enemy1, enemy2, enemy3, enemy4];

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

// keeps the enemies in a continous movement across the canvas
Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed * player.level * dt;
    if (this.x >= 510) {
      this.x = -40;
    };
    
          
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
     
    // checks whether there is a conflict or not inbetween the bug and player

    if (player.x < this.x + 80 &&  this.x < player.x + 80  && player.y < this.y + 60 && this.y<60 + player.y) {
        player.x = 200;
        player.y = 400;
        };



};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

const Player = function(x,y){

    this.x= x;
    this.y= y;
    this.level = 1;
    this.sprite = 'images/char-cat-girl.png';
}

Player.prototype.update = function(){
        if(player.y < 0){
            this.x = 200;
            this.y = 400;
            player.level++;
            document.querySelector(".round").textContent = player.level;
            
  }
       
    
    // is my players Y coordinate > 
    // the waters Y coordinate?

    // if it is, YAY, I win. Send my 
    // players back to the beginning and increase me \
    // level
} 

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
// allows for the player movement within the canvas
// allows the player to moe up, down, left & right
Player.prototype.handleInput = function(direction){
    if (direction == 'left' && this.x > 0) {
        this.x -= 105;
    };

    if (direction == 'right' && this.x < 350) {
        this.x += 105;
    };

    if (direction == 'up' && this.y > 0) {
        this.y -= 85;
    };

    if (direction == 'down' && this.y < 400) {
        this.y += 85;
    };  
}


//player position
const player = new Player(200,400);


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


var player, redThing, redGroup, greenThing, greenGroup, orangeThing, orangeGroup, yellowThing, yellowGroup, invisGround;
var obstacle, obstacleImage, obstacleGroup;
var ground, groundImage;
var game = 1;
function preload() {
  obstacleImage = loadImage("obs.svg")
  groundImage = loadImage("ground.svg")
}
function setup() {
  createCanvas(400, 400);
  player = createSprite(50, 260, 20, 20);
  player.shapeColor = "red"
  ground = createSprite(200, 350, 400, 100);
  ground.shapeColor = "lime";
  ground.addImage(groundImage);
  ground.velocityX = -10;
  invisGround = createSprite(400, 340, 800, 105);
  invisGround.visible = false;
  redGroup = new Group();
  greenGroup = new Group();
  orangeGroup = new Group();
  yellowGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
  background(0, 100, 210);
  if (game==1) {
  if (ground.x < 100) {
    ground.x = ground.width/2
  }
  
  
  if (keyDown("up") && player.collide(invisGround)) {
    player.velocityY = -13
  }
  if (keyDown("1")) {
    player.shapeColor = "red";
  }
  if (keyDown("2")) {
    player.shapeColor = "orange";
  }
  if (keyDown("3")) {
    player.shapeColor = "yellow";
  }
  if (keyDown("4")) {
    player.shapeColor = "green"  
  }
  generateObstacles();
  if (frameCount % 109 == 0) {
      generateColours();
  }
  if (redGroup.isTouching(player) && player.shapeColor!="red") {
    game=0;
  }
  if (orangeGroup.isTouching(player) && player.shapeColor!="orange") {
    game=0;
  }
    if (yellowGroup.isTouching(player) && player.shapeColor!="yellow") {
      game = 0;
    }
    if (greenGroup.isTouching(player)&& player.shapeColor!="green") {
      game = 0;
    }
  if (obstacleGroup.isTouching(player)) {
    game=0;
  }
  }  
  else {
    ground.velocityX = 0;
    
    obstacleGroup.destroyEach();
    redGroup.destroyEach();
    orangeGroup.destroyEach();
    yellowGroup.destroyEach();
    greenGroup.destroyEach();
  }
  player.collide(ground)
  player.velocityY+= 1;
  drawSprites();
}

function generateObstacles(){
  if (frameCount % 80 == 0) {
    obstacle = createSprite(400, 278, 913, 1238902);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -10;
    obstacleGroup.add(obstacle);
    player.depth+=1
  }
}

function generateColours() 
{
  var randint = Math.round(random(1,4))
  if (randint == 1) {
    redThing = createSprite(400, 240, 50, 120);
    redThing.shapeColor = "red"
    redThing.velocityX = -10;
    redGroup.add(redThing)
  } 
  if (randint==2) {
    orangeThing = createSprite(400, 240, 50, 120);
    orangeThing.shapeColor = "orange"
    orangeThing.velocityX = -10;
    orangeGroup.add(orangeThing);
  }
  if (randint==3) {
    yellowThing = createSprite(400, 240, 50, 120);
    yellowThing.shapeColor = "yellow"
    yellowThing.velocityX = -10;
    yellowGroup.add(yellowThing);
  }
  if (randint==4) {
    greenThing = createSprite(400, 240, 50, 120);
    greenThing.shapeColor = "green";
    greenThing.velocityX = -10;
    greenGroup.add(greenThing)
  }
  ground.depth+=1
}
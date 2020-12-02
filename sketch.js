var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
//create ground sprite
  ground = createSprite(400,350,900,10);
  ground.velocityX= -4;
  ground.x = ground.width /2;

// create monkey sprite
  monkey= createSprite(80,350,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;

//scor should start from 0
  score=0;

//creating new groups
  foodGroup= new Group();
  obstacleGroup= new Group();
}


function draw() {
  
//give background colour
  background(130,224,370);

//scoring
  var survivalTime= 0;
  stroke(130,224,370);
  textSize(20);
  fill(130,224,370);
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 130,50);
  if(keyDown("space") && monkey.y >= 200) {
      monkey.velocityY = -12;
    }

//give gravity
  monkey.velocityY = monkey.velocityY + 0.8
   
  if (ground.x < 0){
      ground.x = ground.width/2;
    }

//make it collide with the ground
  monkey.collide(ground);
  
  food();
  obstacles();
  
  
  drawSprites();
}

function food(){

// creating the bananas
   if (frameCount % 80 === 0) {
    var fruit = createSprite(600,120,40,10);
    fruit.y = Math.round(random(120,200));
    fruit.addImage(bananaImage);
    fruit.scale = 0.1;
    fruit.velocityX = -3;
    fruit.lifetime= 200;
     
//putting all the bananas in 1 group   
    foodGroup.add(fruit);
   }
}

function obstacles(){

//creating the obstacles
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,328,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale= 0.1;
    obstacle.velocityX = -6;
    obstacle.lifetime= 200;

//putting obstacles in 1 group
    obstacleGroup.add(obstacle);
  }
}
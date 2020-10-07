


var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime=0;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,300);
  
monkey=createSprite(80,260,20,20);
monkey.addAnimation("moving",monkey_running);  
  monkey.scale=0.1;
  

ground=createSprite(400,295,3000,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);







foodGroup = new Group();
obstacleGroup = new Group();
  
  

  
 
  
  
  
 
  
  
  
  
  
  
  




}


function draw() {

  background(220);
  
  
  survaivaltime=Math.ceil(frameCount/frameRate())
  if(ground.x<0){
  ground.x=ground.width/2;
  }
   
  if(keyDown("space")) {
    monkey.velocityY = -10  ;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
  
  obstacle();
  food();
  drawSprites();
  
  stroke("black");  
  textSize(20);  
  fill("black")  
  text("survaival time: "+survaivaltime,100,50);
}

function obstacle() {
    if(World.frameCount%90=== 0){ 
     var obstacle = createSprite(600,272,40,10);
    obstacle.x = Math.round(random(500,600));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
    }

  }

function food(){
if(World.frameCount%150 === 0){ 
     var banana = createSprite(600,120,40,10);
    banana.x = Math.round(random(500,600));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    }

}









var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score,monkey,ground,bananaGroup;
var survivleTime;

function preload(){ 


    monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");

    bananaImage = loadImage("banana.png");
    obstacleImage = loadImage("obstacle.png");
    obstaclesGroup = loadImage("obstacle.png")

}  



function setup() {

    createCanvas = (400,400);
    

    monkey = createSprite(100,300,40,40);
    monkey.addAnimation("running",monkey_running);
    monkey.scale = 0.10;

    ground = createSprite(200,330,400,5);

survivleTime = 0;

  bananaGroup = createGroup(banana);
  obstaclesGroup = createGroup(obstacle);
  
  
}


function draw() {
 background("white");

  
  
  
  
  
  
  
 if(keyDown("space") && monkey.y>=100 ){
   monkey.velocityY = -10;
 }
  
 monkey.velocityY = monkey.velocityY + 0.9 ; 
  
 monkey.collide(ground); 
 //monkey.bounceOff(ground) ;

 
  survivleTime=Math.ceil(frameCount/frameRate()); 
  text("survivalTime :  "+survivleTime, 25,50);

  

 spawnObstacles(); 
 spawnBananas();
  
 drawSprites(); 
}

function spawnObstacles(){ 
  
  if (frameCount % 100 === 0){
  obstacle = createSprite(200,300);
     obstacle.addImage("obstacle",obstacleImage);
     obstacle.scale = 0.15;
   obstacle.velocityX = -4
   obstacle.lifetime = 100; 
  
  } 

}  
     
     
    function spawnBananas(){ 
     if (frameCount % 80 === 0){
    banana  = createSprite(200,150,20,20);
    banana.y = Math.round(random(120,200));

     banana.addImage("bannana",bananaImage)
    banana.scale = 0.05
    banana.velocityX = -4
    banana.lifetime = 100;
   
      
     
     }
 }





var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0
var invisibleGround

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 200)
   ground = createSprite(200, 180, 400, 20)
  ground.velocityX = -4
  ground.x = ground.width / 2
  ground.visible = false
  monkey = createSprite(50, 160, 20, 50)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1
  console.log(ground.x)
  invisibleGround = createSprite(200,190,400,10)
  invisibleGround.visible = true
  obstacleGroup = createGroup()


}


function draw() {
  background("white")
  spawnObstcles()
  stroke("white")
  textSize(20)
  fill("white")
  text("score :" + score, 500, 50)
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;  
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount / frameRate())
  text("Suvival Time : " + survivalTime, 100, 50)
  
  drawSprites()
  

}

function spawnObstcles() {
  if (frameCount % 300 === 0) {
    obstacle = createSprite(400, 165, 10, 40)
    obstacle.velocityX = -(6+ score/100)
    var rand = Math.round(random(1, 6))
    obstacle.lifetime = 80000
    obstacleGroup.add(obstacle)
    ground.depth = monkey.depth
    monkey.depth = monkey.depth+1
  }

}
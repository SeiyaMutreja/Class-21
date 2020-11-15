var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "purple";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "purple";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "purple";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "purple";
}

function draw() {
  background(0,0,0);  
  gameObject1.velocityY = 1;
  gameObject2.velocityX = 2;
  gameObject3.velocityY = -1;
  gameObject4.velocityX = -2;
  if (bounceOff(gameObject1, gameObject3)){
    gameObject1.velocityY = gameObject1.velocityY*(-1);
    gameObject3.velocityY = gameObject3.velocityY*(-1);

  }
  else {
   gameObject1.velocityY = 1;
   gameObject3.velocityY = -1;
  }
  drawSprites();
}


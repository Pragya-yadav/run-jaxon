var path,jake, leftBoundary,rightBoundary;
var pathImg,jakeImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  jakeImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  
  createCanvas(400,400);
  

path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;


jake = createSprite(180,340,30,30);
jake.addAnimation("JakeRunning",jakeImg);
  

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  
  jake.x = World.mouseX;
  
  edges= createEdgeSprites();
  jake.collide(edges[3]);
  jake.collide(leftBoundary);
  jake.collide(rightBoundary);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
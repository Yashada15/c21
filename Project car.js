var bullet1,wall,bullet2,bullet3;
var speed,weight,thickness;

function setup() {
  createCanvas(1200,800);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,50,50);
 wall=createSprite(200,280, thickness, height/2);
 wall.shapeColour="black";
}

function draw() {
  background(0,0,0);  

  bullet.velocityX=speed;
if(wall.x-bullet.x<(bullet.weight+wall.weight)/2){
  bullet.velocityX=0;
  var deformation=0.5 *weight*speed*speed/22509;
  if(deformation>180){
    bullet.shapeColour="red"(255,0,0);
  }
  if (deformation<180 && deformation>100){
    bullet.shapeColour="yellow"(230,230,0);
  }
  if(deformation<100){
    bullet.shapeColour="green"(0,255,0);
  }
}

if (hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if (damage>10){
  wall.shapeColour=green(255,0,0);
}
if (damage<10){
  wall.shapeColour=red(0,255,0);
}

}

hasCollided();

  drawSprites();
} 

function hasCollided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x + Lbullet.weight;
  wallLeftEdge=Lwall.x;
if(bulletRightEdge>=wallLeftEdge){
return true
}
return false;
}
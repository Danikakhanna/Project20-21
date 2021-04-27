var bullet,wall,speed,weight,damage
function setup() {
  createCanvas(1600,400);
  //bullet=createSprite(50, 200, 50, 30);
  weight=random(30,50)
  thickness=random(22,83)
  wall=createSprite(1000, 200, thickness, 200);
  wall.shapeColor="grey"
  speed=random(223,321)
 
  bullet=createSprite(50,200,50,10);
  bullet.shapeColor="white"
  bullet.velocityX=speed
}

function draw() {
  background(255,255,255);
  if(wall.x-bullet.x<wall.width+bullet.width/2){
    bullet.velocityX=0
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage<10){
      bullet.shapeColor="green"
    }
       if(damage>10){
      bullet.shapeColor="red"
    }
  }  
  drawSprites();
}
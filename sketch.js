var car, wall;
var speed, weight;

function setup () {
createCanvas(1600,400);
speed = random(55,90);
weight = random(400,1500);
car = createSprite(50,200,50,50);
wall = createSprite(1500,200,60,height/2);
car.velocityX=speed;
} 

function draw() {
  background("black");
  collision (car,wall);
  drawSprites();
}
function collision(ob1,ob2){
  if(ob2.x - ob1.x < ob2.width/2 + ob1.width/2) {
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation > 180)
    {
     ob1.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100 ) 
    {
      ob1.shapeColor = color(230,230,0);
    }
    if(deformation < 100)
    {
      ob1.shapeColor = color(0,255,0);
    }
  }
}

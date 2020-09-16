var car, wall, car_crash_sound;
var speed, weight;

function preload() {
  car_crash_sound = loadSound("car_crash.mp3");
}

function setup() {
  createCanvas(1600,800);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
  car_crash_sound.play();
}

function draw() {
  background(255,255,255);  

  if(wall.x - car.x < (car.width + wall.width)/2)
  {
   car.velocityX = 0;
   var deformation = Math.round(0.5 * weight * speed * speed/22509);
   textSize(60);
   if(deformation > 180)
   {
    fill("red");
    text("deformation = "+deformation,580,200);
    text("lethal & dangerous for passengers",400,250);
    car.shapeColor = color(255,0,0);
  }
  
  if(deformation > 80 && deformation < 180)
  {
    fill("yellow");
    text("deformation = "+deformation,650,100);
    text("Average Safety for passengers",500,150);
    car.shapeColor = color(230,230,0);
  }
  
  if(deformation < 80)
  {
    fill("green");
    text("deformation = "+deformation,530,100);
    text("safe for passengers",500,150);
    car.shapeColor = color(0,255,0);
  }
 }

  drawSprites();
}
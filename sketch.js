function preload(){
  snowImg = loadImage("snow1.jpg")
}


function setup() {
  createCanvas(800,400);
 snow = createSprite(400, 200, 800, 400);
  snow.addImage(snowImg)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
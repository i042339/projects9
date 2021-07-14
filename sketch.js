var sea,seaimage
var ship,shipimage
function preload(){
  seaimage=loadImage("sea.png")
  shipimage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,30,50)
  sea.addImage(seaimage)
  ship=createSprite(200,200,40,40)
  ship.addAnimation("running",shipimage)
  
}

function draw() {
  background("blue");
 drawSprites()
}
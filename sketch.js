
var trex ,trex_running;

function preload(){
 //give animation to trex here
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,20,50)
trex.addAnimation("running",trex_running)
trex.scale=0.5
 
// create a ground sprite here
ground=createSprite(200,180,400,20)
}

function draw(){
  background("white")
  //give velocity to trex here
if(keyDown("space")){

trex.velocityY=-9


}
// give gravity to trex here
trex.velocityY=trex.velocityY+0.5
// create command so trex can settle at ground 
trex.collide(ground)


  drawSprites();
}

var bg,bgImage
var cat,catImage
var mouse,mouse1,mouse2,mouse3,mouse4
function preload() {
    //load the images here
    bgImage=loadImage("garden.png");
    
    
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     bg = createSprite(0,0,1000.800);
     bg.addImage("background",bgImage);



}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}

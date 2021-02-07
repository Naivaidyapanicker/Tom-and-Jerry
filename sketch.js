var bg,bgImage;
var cat1,cat1Image,cat2,catWalking,cat4,cat4Image;
var mouse2,mouse2Image;
function preload() {
    //load the images here
    bgImage=loadImage("garden.png");
    cat1Image=loadImage("tomOne.png");
    catWalking=loadAnimation("tomTwo.png","tomThree.png");
    cat4Image=loadImage("tomFour.png");
    mouse2Image=loadImage("jerryTwo.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     bg = createSprite(500,400,1000,800);
     bg.addImage("background",bgImage);
     bg.scale = 1;

     cat2 = createSprite(790,650,50,50);
     cat2.addAnimation("walking",catWalking)
     cat2.scale = 0.1;

     cat4 = createSprite(150,650,50,50);
     cat4.addImage("lastImg",cat4Image);
     cat4.scale = 0.1;
    

    mouse2 = createSprite(75,650,10,10);
    mouse2.addImage("jerry",mouse2Image);
    mouse2.scale = 0.1






}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide


    
    keyPressed()
    cat2.visible = false;

    if(keyDown(LEFT_ARROW)){
        cat2.visible = true;
    }
    if(keyDown(LEFT_ARROW)){
        cat2.changeImage("lastImg")
        cat4.visible = false;
    }
    if(keyWentUp(LEFT_ARROW)){
        cat4.visible = true;
    }
    
   
    drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code here

 if(keyCode === LEFT_ARROW){
     cat2.velocityX = -5;
     cat2.changeAnimation("walking");
 }


}

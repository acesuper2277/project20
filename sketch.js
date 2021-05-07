var backgroundImg;
var cat,catSitting,catRunning,cat4Img;
var mouse,mouse1Img,mouseTeasing,mouse4Img;

function preload() {

    backgroundImg = loadImage("garden.png");
    catSitting = loadImage("cat1.png");
    catRunning = loadAnimation("cat2.png","cat3.png");
    cat4Img = loadAnimation("cat4.png");
    mouse1Img = loadImage("mouse1.png");
    mouseTeasing = loadAnimation("mouse2.png" ,"mouse3.png");
    mouse4Img = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(870,650,50,60);
    cat.addImage(catSitting);
    cat.scale = 0.2;
    cat.setCollider("rectangle",0,0,900,700);


    mouse = createSprite(200,650,50,60);
    mouse.addImage(mouse1Img);
    mouse.scale = 0.16;
    mouse.setCollider("rectangle",0,0,700,1000);

}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width/2 - mouse.width/3)){

        cat.velocityX = 0;
        cat.addAnimation("catSittingHappily",cat4Img);
        cat.changeAnimation("catSittingHappily");

        mouse.addAnimation("mouse4",mouse4Img);
        mouse.changeAnimation("mouse4");
        mouse.x = 180;
    }

    drawSprites();
}


function keyPressed(){

if(keyCode === LEFT_ARROW){

    mouse.addAnimation("mouseTeasing",mouseTeasing);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 15;

    cat.addAnimation("catRunning",catRunning);
    cat.changeAnimation("catRunning");
    cat.velocityX = -4;
    cat.frameDelay = 15;
}


}

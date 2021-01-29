var canvas;
var music;
var blueRect,yellowRect,redRect,greenRect;
var box;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);


    //create 4 different surfaces
blueRect = createSprite(720,580,600,70);
blueRect.scale = 0.3;
blueRect.shapeColor = "blue";

yellowRect = createSprite(300,580,600,70);
yellowRect.scale = 0.3;
yellowRect.shapeColor="yellow";

redRect = createSprite(80,580,600,70);
redRect.scale = 0.3;
redRect.shapeColor="red";

greenRect = createSprite(500,580,600,70);
greenRect.scale = 0.3;
greenRect.shapeColor="green";

box = createSprite(500,50,70,70);
box.scale = 0.3;
box.shapeColor="orange";
box.velocityY = 5;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(250));
    //create edgeSprite
createEdgeSptite();

box.bounceoff(blueRect);
box.bounceoff(yellowRect);
box.bounceoff(redRect);

if(box.isTouching(blueRect)){
    box.shapeColor = "blue";
}


if(box.isTouching(yellowRect)){
    box.shapeColor = "yellow";
}


if(box.isTouching(greenRect)){
    box.shapeColor = "orange";
    box.velocityX = 0;
}

drawSprites();

    //add condition to check if box touching surface and make it box
}

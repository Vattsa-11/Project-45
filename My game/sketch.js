var Sol1Img,Sol2Img,Sol3Img;
var PlayerImg1,PlayerImg2;
var KingImg;
var BGImg;
var BG;
var Ground;

var Player;
var gameState;
var Score;

function preload(){
    Sol1Img = loadImage("My Game/Ninja1.png");
    Sol2Img = loadImage("My Game/Soldier2.png");
    Sol3Img = loadImage("My Game/Soldier3.png");
    PlayerImg1 = loadImage("My Game/dan1.png");
    PlayerImg2 = loadImage("My Game/dan2.png");
    KingImg = loadImage("My Game/King.png");
    BGImg = loadImage("My Game/BackGround.jpg");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    BG = createSprite(width/2,height/2);
    BG.x = width/2;
    BG.addImage(BGImg);
    BG.scale = 1.1;
    //BG.velocityX = 
    fill("red");
    Ground = createSprite(width/2,height,width,40);
    Player = createSprite(50,height-60,10,10);
    Player.addImage(PlayerImg1);
}

function draw(){
    background(BGImg);
    if(BG.x < 0 ){
        BG.x = BG.width/2;
    }
    drawSprites();
}
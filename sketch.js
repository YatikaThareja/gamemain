const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body
const Bodies=Matter.Bodies

var db,engine,world,body;
var gameState=0;
var playerCount=0,form,player,game,img;
var allPlayers;
var player1,player2,player3,player4;
var player2Img,player3Img,player1Img,player4Img,track,ground,ball,ball2,ball3;
var bg;
var gamer1,gamer2,obstacles;
var gamers=[]

function preload(){
  player1Img=loadImage("Images/img1.png");
  player2Img=loadImage("Images/img2.png");
  ground=loadImage("Images/ground.png")
  track=loadImage("Images/track.jpeg")
  bg=loadImage("Images/image3.jpeg")
  ball=loadImage("Images/ball.png");
  ball2=loadImage("Images/ball2.png");
  ball3=loadImage("Images/ball3.png");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  db=firebase.database();
  db.ref("gameState").on("value",(data)=>{
  gameState=data.val();
  })
  
  game=new Game();
  game.getState();
  game.start();


}

function draw() {
  background(bg);
  if (playerCount===2){
    game.updateState(1)
  }
  if(gameState===1){
    game.play();
  }
}

var player1
var player2
var shield1
var shield2
var Sword1
var Sword2
var Background
var invisibleBoundary1
var invisibleBoundary2
var edges
var END=0
var PLAY=1
var gameState=SERVE
var SERVE
var Health=100
function preload(){
player1Image=loadImage("player1.png")
player2Image=loadImage("player.png")
shield1Image=loadImage("shield1.png")
shield2Image=loadImage("shield2.png")
Sword1Image=loadImage("Ninjasword1.png")
Sword2Image=loadImage("Ninto.png")
BackgroundImage=loadImage("Background1.jpg")
Theme1Sound=loadSound("Theme 1.mp3")
Theme2Sound=loadSound("Theme 2.mp3")
ThumbnailImage=loadImage("Thumbnail.jpg")

}

function setup() {
  createCanvas(1550,750);
  player1=createSprite(200, 400,);
player1.addImage("abc",player1Image)
player1.scale=01

player2=createSprite(1400,400)
player2.addImage("xyz",player2Image)
player2.scale=01

shield1=createSprite(380,400)
shield1.addImage("noiw",shield1Image)
shield1.scale=0.7

shield2=createSprite(1200,400)
shield2.addImage("noi",shield2Image)
shield2.scale=1.5

Sword1=createSprite(400,400)
Sword1.addImage("fnherouvb",Sword1Image)
Sword1.scale=0.5

Sword2=createSprite(1100,400)
Sword2.addImage("enjojb3f",Sword2Image)
Sword2.scale-0.1
invisibleBoundary1=createSprite(15,700,15,1400)
invisibleBoundary1.visible=false

edges=createEdgeSprites()

}

function draw() {
  background(BackgroundImage);
if(keyDown(RIGHT_ARROW)){
  Sword1.x=Sword1.x+50
}
  if(keyDown(LEFT_ARROW)){
    Sword1.x=Sword1.x-50
  }
  
  if(keyDown("A")){
    player1.x=player1.x-50
  }
    if(keyDown("D")){
      player1.x=player1.x+50
    }
    if(keyDown("Z")){
      shield1.x=shield1.x-50
    }
      if(keyDown("C")){
        shield1.x=shield1.x+50
      }
  
      if(keyDown(RIGHT_ARROW)){
        Sword1.x=Sword1.x+50
      }
        if(keyDown(LEFT_ARROW)){
          Sword1.x=Sword1.x-50
        }

        player1.collide(edges)
        Sword1.collide(edges)
       shield1.collide(edges)
  
if(Sword1.isTouching(player2)){
  Health=Health-20
Sword1.x=400
Sword1.y=400
}
  
  
  
  
       drawSprites();
textSize(35)
fill(250)
text("Health :"+Health,100,100)
      }
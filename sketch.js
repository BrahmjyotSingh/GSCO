var fixedrect,movingrect
function setup() {
  createCanvas(800,400);
 fixedrect = createSprite(400, 200, 50, 50);
 fixedrect.shapeColor="red"
 movingrect = createSprite(200,100,50,50)
 movingrect.debug=true
 fixedrect.debug=true
 movingrect.shapeColor = "red"
}

function draw() {
  background(0);  
  movingrect.x=mouseX
  movingrect.y=mouseY
  if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  &&movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2
  &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  ){
    fixedrect.shapeColor="blue"
    movingrect.shapeColor = "blue"
  }
  else{
    fixedrect.shapeColor="red"
    movingrect.shapeColor = "red"
  }
  drawSprites();
}
var a,b

function setup() {
  createCanvas(600,600);

  a=createSprite(200,200,80,30);
  b=createSprite(450,200,30,80);

  a.shapeColor="red";
  b.shapeColor="red";

  a.debug=true;
  b.debug=true;

}
function draw() {
  background("black");

b.x=mouseX;
b.y=mouseY;

if(b.x-a.x<=a.width/2+b.width/2 && a.x-b.x<=a.width/2+b.width/2 &&
  b.y-a.y<=a.height/2+b.height/2 && a.y-b.y<=a.height/2+b.height/2)
{
  a.shapeColor="green";
  b.shapeColor="green";

}

else
{
  a.shapeColor="red";
  b.shapeColor="red";
}

  drawSprites();
}
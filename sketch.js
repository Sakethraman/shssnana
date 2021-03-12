var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 400, 50, 80);
  movingRect = createSprite(400,200,80,30);
}

function draw() {
  background();  
  movingRect.x = World.mousex
  movingRect.y = World.mousey
  drawSprites();
}
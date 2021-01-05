function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(244,255,226);
  background(142,165,106);
}
var x =5, y=5
var vx = 3, vy = 3
function draw() {
fill(142+frameCount/3,165+frameCount/3,106+frameCount/3,80);
  // fill(142+frameCount/3,165+frameCount/3,106+frameCount/3);
  stroke(244,255,226,70+frameCount*4)
  
  ellipse(x, y, frameCount*4,);
  ellipse(frameCount*2, x, y);
  ellipse(x, frameCount*3, y);
  x = x+vx
  y = y+vy
  vy +=0.3
  if(y>height){
    vy =-vy*0.9
    y =height}
    
  
  
}
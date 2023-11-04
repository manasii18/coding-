var diam = 200;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(255);
  ellipse(200,200,diam);
 
  //eye
  noFill();
  ellipse(mouseX,mouseY,50,20);
  fill(0);
  ellipse(mouseX,mouseY,10);
 
  var d = dist(mouseX,mouseY,200,200);
  if(d<diam/2+80) {
    fill(random(0,255));
     ellipse(200,200,diam);
  } 
}
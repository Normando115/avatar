let fr = 30; //starting FPS
let micLevel;
let marks = [];

function setup() {
  mic = new p5.AudioIn();
  mic.start();  
  createCanvas(500, 500);
  background(191, 191, 191);
    frameRate(fr); // Attempt to refresh at starting FPS
     for (let i = 0; i <= 40; i++){
    marks[i] = new Mark();

 }

}
function draw(){
    background(191, 191, 191);
  push();
   for (let i = 0; i <= 40; i++){
   // marks[i] =  Mark();
   marks[i].display();
  marks[i].move();
 }
  pop(); 
  micLevel = mic.getLevel();


  drawShoulders();
  drawChest();
  drawTable();
  drawNeck();
  drawArms();
  drawEyes();
  drawClock();
  
}

function drawChest(){
    //chest
fill(255, 255, 255);
  beginShape();
vertex(width * .4, height *.4);
vertex(width * .28, height *1);
vertex(width * .7, height *1);
vertex(width * .7, height *.56);
  vertex(width * .65, height *.42);
    endShape(CLOSE);
}
function drawTable(){
    //table
   fill(191, 166, 107);
      beginShape();
vertex(width * .0, height *.7);
vertex(width * 1, height *.9);
vertex(width * 1, height *1);
vertex(width * 0, height *1);  
    endShape(CLOSE);
}
function drawNeck(){
    //neck
  fill(255, 239, 186);
circle(260, 210, 55); 
  //head
  fill(255, 239, 186);
    circle(260, 110, 220);

}
function drawShoulders(){
  
 //left shoulder
fill(255, 239, 186);
  beginShape();
curveVertex(width * .5, height *.36);
curveVertex(width * .3, height *.44);
curveVertex(width * .27, height *.75);
  endShape(CLOSE);
  
  //left shoulder 2
fill(255, 255, 255)
   beginShape();
curveVertex(width * .5, height *.36);
curveVertex(width * .3, height *.44);
vertex(width * .27, height *.62);
  endShape(CLOSE);
  
  //right shoulder
  fill(255, 239, 186)
   beginShape();
curveVertex(width * .65, height *.4);
curveVertex(width * .7, height *.42);
vertex(width * .75, height *.5);
vertex(width * .74, height *.8);
  endShape(CLOSE);
  
  //right shoulder 2
  fill(255, 255, 255)
     beginShape();
curveVertex(width * .65, height *.39);
curveVertex(width * .73, height *.44);
vertex(width * .77, height *.6);
vertex(width * .70, height *.6);
  endShape(CLOSE);
}
function drawArms(){ 
  //left arm
fill(255, 239, 186)  
  beginShape();
  vertex(width * .31, height *.26);
  vertex(width * .30, height *.27);
  vertex(width * .31, height *.31);
  vertex(width * .37, height *.41);
  vertex(width * .27, height *.64);
  vertex(width * .26, height *.68);
  vertex(width * .26, height *.75);
  vertex(width * .30, height *.80);
  vertex(width * .32, height *.80);
  vertex(width * .35, height *.75);
  vertex(width * .38, height *.70);
  vertex(width * .40, height *.40);
  vertex(width * .34, height *.25);
  vertex(width * .33, height *.24);
  endShape(CLOSE);
  
  
  //right arm
fill(255, 239, 186)
    beginShape();
vertex(width * .62, height *.42);
vertex(width * .66, height *.70);
vertex(width * .70, height *.85);
vertex(width * .73, height *.85);
vertex(width * .76, height *.81);
vertex(width * .78, height *.75);
vertex(width * .77, height *.7);
vertex(width * .66, height *.43);
vertex(width * .73, height *.33);
vertex(width * .73, height *.29);
vertex(width * .70, height *.28);
vertex(width * .68, height *.29);
  endShape(CLOSE);
  
}

function drawEyes(xPos, yPos, size){
  
  xPos = 210
  //Eyes
  fill(255, 255, 255);
  
ellipse(220,100,50,70);
ellipse(320,100,50,70);
  
   if (mouseX > 270 && mouseX < 500){
    xPos=240
}
  //pupils
    fill( 50, 50, 50);
circle(xPos, 100, 10);
circle(xPos+ 100, 100,10);
  
line(200,50+micLevel*100, 220, 50+micLevel*100);
line(220,50+micLevel*100, 230, 48+micLevel*100);
 line(230,48+micLevel*100, 250, 58+micLevel*100);
  line(250, 58+micLevel*100, 253, 57+micLevel*100);
  line(300, 50+micLevel*100, 350, 40+micLevel*100);
  
  //nose
   line(270, 120, 280, 140);
  line(280,140, 270, 150);
  //mouth
  fill(0);
  circle(270,185,micLevel*250);
}
function drawClock(){
  fill(255,255,255);
ellipse(70,70,120);
  fill(0,0,0);
  ellipse(68,70,7);
  push();
    beginShape();
   translate(width * .135, height *.138);
   rotate(frameCount/50);
  vertex(width * .0, height *.0);
  vertex(width * .0, height *.005);
  vertex(width * .1, height *.01);
  endShape(CLOSE);
   pop();
}


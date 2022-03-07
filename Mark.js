class Mark{
  constructor(xPos,yPos,rotation){
    this.xPos = random(width);
    this.yPos = random(height);
    this.rotation = random(-0.5,-0.5);
  }
display(){
  push();
  translate(this.xPos,this.yPos);
  rotate(this.rotation);
rect(0,0,6,20);
  rect(0,0,24,6);
  rect(24,0,6,35);
  rect(24,45,6,10);
  pop();

}
  
move(){
if (this.yPos <= height) {
  this.yPos +=2
}
  else {
    this.yPos= 0;
  }
  
  this.rotation = this.rotation + -0.05;      
  }

}
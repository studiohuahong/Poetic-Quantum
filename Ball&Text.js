class Ball {
  constructor(x,y,r,speedX,speedY,easing){
	this.x = random(width);
	this.y = random(height);
    this.r = random(5,50);
    this.speedX = random(0,5);
	this.speedY = random(0,5);
    this.easing = random(0.08,0.8);
    
  }
  
  move () {
    
    this.x += speedX+random(-10,10);
    this.y += speedY+random(-10,10);
    
    if (this.x > width - this.r || this.x < this.r) {
      speedX = -speedX;
    }
    if (this.y > height - this.r || this.y < this.r) {
      speedY = -speedY;
    }
  }
  
  show(){
    
	//noStroke();
    push();
    stroke(255,51);
    //filter(BLUR, 0.5)
    //fill(0);
	//fill(0,255-this.x*this.easing,0+this.x/this.easing);
    fill(200-this.x*this.easing);
	ellipse(this.x,this.y,this.r,this.r);
    pop();
     
    // textFont('Helvetica/Bold');
    // textSize(this.r*10);
    // text("A", this.x-10,this.y-10)
  }
  
  collapse(){
    this.speedX = 0;
	this.speedY = 0;
    //this.r --;
  }
}






class Text {
  constructor(text,x,y,r,speedX,speedY,easing){
	this.x = random(width);
	this.y = random(height);
    this.r = random(20,30);
    this.speedX = random(0,5);
	this.speedY = random(0,5);
    this.easing = random(0.08,0.8);
    this.text = text;
    
  }
  
  move () {
    
    this.x += speedX+random(-20,20);
    this.y += speedY+random(-20,20);
    
    if (this.x > width - this.r || this.x < this.r) {
      speedX = -speedX;
    }
    if (this.y > height - this.r || this.y < this.r) {
      speedY = -speedY;
    }
  }
  
  show(){
     //filter(INVERT);
	// noStroke();
	// stroke(51,51);
	//fill(255-this.x*this.easing,0+this.x/this.easing,0);
    //fill(0);
    fill(this.x*this.easing);
    //textFont('Helvetica/Bold');
    textFont(IBMfont);
    textSize(this.r);
    text(this.text, this.x,this.y)

  }
}
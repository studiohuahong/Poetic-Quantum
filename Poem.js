
class Poem {
  constructor(line1,line2,line3,line4){
	this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.line4 = line4;
    //this.index = Math.floor(random(6))
    
  }
  
  show(){
    
    
    fill(255)
    textSize(20)
    textAlign(CENTER, CENTER);
    text(this.line1,200,50);
    text(this.line2,200,100);
    text(this.line3,200,150);
    text(this.line4,200,200);
    
  }
}
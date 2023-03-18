var x, y, r;
var speedX, speedY;
let balls = [];
let texts = ["Be","Bi","Bo","Bu","De","Di","Fa","Fo","Hi","Ho","Ko","Ku","Lu","Li","Ma","Ne","Pi","Ro","Su","Se","Ta","Ti"];

let line1;
let line2;
let line3;
let line4;
let verb;

let poemIndex =0;

let IBMfont;

let video;
let poseNet;
let poses = [];
let stateNow;
let statePre;

let collapseDetect = true;
let collapseDetectFlag = true;

function preload() {
  IBMfont = loadFont('IBMPlexMono-Regular.otf');
  
}

function setup() {
  createCanvas(1024, 1346); //2732-by-2048 iPad
  background(0);
  frameRate(12);
  
  video = createCapture(VIDEO);
  video.size(width, height);
  poseNet = ml5.poseNet(video);
  poseNet.on('pose', function(results) {
    poses = results;
  });
  video.hide();
  
  x = 0;
  y = 0; 
  speedX = 1;
  speedY = 1;

  
    for(let i = 0; i < 20; i++){
	balls[i] = new Ball();
  }
  
	for(let i = 0; i < texts.length; i++){
	texts[i] = new Text(texts[i]);
	}
  
}


function draw() {
  
  if(poses.length > 0){   
    if(collapseDetect == collapseDetectFlag){
      push();
        fill(0,0,0,150);
        rect(0,0,width,height)
      pop();
      collapse();
      console.log('collapse');
      collapseDetect = false;
    }
  }
  else{    
    superPosition();
    console.log('super position');
    collapseDetect = true;
  }
  }






function collapse(){
  for(let i = 0; i < balls.length; i++){
	  balls[i].collapse();
    }
  
  
  if(poemIndex == 0){
    poem0();  
  }
  if(poemIndex == 1){
    poem1(); 
  }
  if(poemIndex == 2){
    poem2(); 
  }
  if(poemIndex == 3){
    poem3(); 
  }
  
  poemIndex ++;
  
  if(poemIndex == 4){
    poemIndex = 0;
  }
  
}



function superPosition() {
        for(let i = 0; i < balls.length; i++){
        balls[i].move();
        balls[i].show();
      }

      for(let i = 0; i < texts.length; i++){
        texts[i].move();
        texts[i].show();
	  } 
}




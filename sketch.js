//Verstellbare Variabeln
let radius1= 50; 
let canvas;
let radius3= 200;

let xSpeed1= 5;
let ySpeed1= 6;
let x1= 200;
let y1= 200;
let xSpeed2= -8;
let ySpeed2= 9;
let x2= 200;
let y2= 200;
let radius2 =50;
let c1= 0;
let c2= 255;
let c3= 255;
let stroke2 = 1;
let stroke3 =1;
let mitte;
let xq1;
let xq2;
let xq3;
let xq4;
let yq1;
let yq2;
let yq3;
let yq4;
let schwierigkeit = 300;
let Punkte = 0;
let over = 0;



function setup() {
  canvas = windowHeight;
  createCanvas(windowHeight, windowHeight);
  x1= 300;
  y1= 500;
  x2= canvas/2;
  y2= canvas/2;
  mitte= canvas/2;
  over=0;
  Punkte=0;
  schwierigkeit=300;
  xSpeed1=5;
  ySpeed1=6;

}

function draw() {
  
  if(over==0){
    
textSize(50);
  
  print(schwierigkeit);
  
  if(c2==1){
    background(0);
    fill(255);
  }
  else{
    background(255);
    fill(0)
    stroke(255);
  }
  
  rect(20, mouseY-schwierigkeit/2, 10,schwierigkeit);
  text("Punkte: "+Punkte,30,70)
  
  //Kreis und Bewegung
  circle(x1,y1,radius1)
  x1=x1+xSpeed1;
  y1=y1+ySpeed1;
  
  //Abprallen vom Rand
  if(x1>canvas-radius1/2){
    xSpeed1=xSpeed1*-1;
    if(c2==1){c2=0;}
    else{c2=1;}
    
  }
  
  if(y1>canvas-radius1/2){
    ySpeed1=ySpeed1*-1;
    if(c2==1){c2=0;}
    else{c2=1;}
  }
  if(y1<0+radius1/2){
    ySpeed1=ySpeed1*-1
    if(c2==1){c2=0;}
    else{c2=1;}
  }
  
  //Abprallen Schläger, Punkte und höhere Schwierigkeit
  
  if(x1<25+radius1/2 && (y1>mouseY-schwierigkeit/2 && y1<mouseY+schwierigkeit/2)){
    
    xSpeed1= xSpeed1*-1;
    Punkte++;
    
    if(schwierigkeit>=60){
     schwierigkeit = schwierigkeit-10;
      xSpeed1 = xSpeed1*1.1;
      ySpeed1 = ySpeed1*1.1;
    }
    
    if(c2==1){c2=0;}
    else{c2=1;}
  }
  
  //game over
 if(x1<0){
   
   over=1;
   
 }
  
  
}
  
  else{ 
    fill(255);
    background(0);
    textSize(80);
    text("Game Over!",80,200);
    textSize(200);
    text(Punkte,100,430);
    textSize(30);
    
  }
}


  function mousePressed(){
    
    if(over==1){
      setup();
      
    }
    
    
    
    
  }
  
  
  
  
  

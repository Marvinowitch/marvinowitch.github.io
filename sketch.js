//Verstellbare Variabeln
let radius1 = 50;
let canvas;
let radius3 = 200;

let xSpeed1 = 5;
let ySpeed1 = 6;
let x1 = 200;
let y1 = 200;
let xSpeed2 = -8;
let ySpeed2 = 9;
let x2;
let y2;
let y3;
let radius2 = 50;
let c1 = 0;
let c2 = 255;
let c3 = 255;
let stroke2 = 1;
let stroke3 = 1;
let mitte;
let schwierigkeit = 300;
let Punkte = 0;
let over = 0;
let uppressed;
let downpressed;
let wpressed;
let spressed;
let winner;
let movespeed;

function setup() {
  canvas = 800;
  createCanvas(canvas, canvas);
  x1 = 300;
  y1 = 500;
  mitte = canvas / 2;
  over = 0;
  x2 = mitte;
  y2 = mitte;
  y3 = mitte;
  Punkte = 0;
  schwierigkeit = 300;
  xSpeed1 = 5;
  ySpeed1 = 6;
  winner = 0;
  movespeed = 4;
}

function draw() {
  //tests
  print("Movespeed= "+movespeed);
  
  
  
  //move Schläger
  if (uppressed) {
    y3 -= movespeed;
  }
  if (downpressed) {
    y3 += movespeed;
  }

  if (wpressed) {
    y2 -= movespeed;
  }
  if (spressed) {
    y2 += movespeed;
  }

  //läuft während spiel
  if (over == 0) {
    //hintergrund farbe ändern
    textSize(50);
    if (c2 == 1) {
      background(0);
      fill(255);
    } else {
      background(255);
      fill(0);
      stroke(255);
    }

    //Punkte schreiben
    text(Punkte, mitte-15, 60);
    
    
    //Schläger zeichnen
    rect(20, y2 - schwierigkeit / 2, 10, schwierigkeit);
    rect(canvas - 30, y3 - schwierigkeit / 2, 10, schwierigkeit);

    //Kreis und Bewegung
    circle(x1, y1, radius1);
    x1 = x1 + xSpeed1;
    y1 = y1 + ySpeed1;

    //Abprallen vom Rand

    if (y1 > canvas - radius1 / 2) {
      ySpeed1 = ySpeed1 * -1;
      if (c2 == 1) {
        c2 = 0;
      } else {
        c2 = 1;
      }
    }
    if (y1 < 0 + radius1 / 2) {
      ySpeed1 = ySpeed1 * -1;
      if (c2 == 1) {
        c2 = 0;
      } else {
        c2 = 1;
      }
    }

    //Abprallen Schläger 1, Punkte und höhere Schwierigkeit

    if (
      x1 < 30 + radius1 / 2 &&
      y1 > y2 - schwierigkeit / 2 &&
      y1 < y2 + schwierigkeit / 2
    ) {
      xSpeed1 = xSpeed1 * -1;
      Punkte++;

      if (schwierigkeit >= 60) {
        schwierigkeit = schwierigkeit - 10;
        xSpeed1 = xSpeed1 * 1.1;
        ySpeed1 = ySpeed1 * 1.1;
        movespeed+= 0.2;
      }

      if (c2 == 1) {
        c2 = 0;
      } else {
        c2 = 1;
      }
    }

    //Abprallen Schläger 2, Punkte und höhere Schwierigkeit

    if (
      x1 > canvas - 30 - radius1 / 2 &&
      y1 > y3 - schwierigkeit / 2 &&
      y1 < y3 + schwierigkeit / 2
    ) {
      print("test");
      xSpeed1 = xSpeed1 * -1;
      Punkte++;

      if (schwierigkeit >= 60) {
        schwierigkeit = schwierigkeit - 10;
        xSpeed1 = xSpeed1 * 1.1;
        ySpeed1 = ySpeed1 * 1.1;
        movespeed+= 0.2;
      }

      if (c2 == 1) {
        c2 = 0;
      } else {
        c2 = 1;
      }
    }

    //game over
    if (x1 < 0) {
      over = 1;
      winner= 2;
    }

    if (x1 > canvas) {
      over = 1;
      winner=1;
    }
  }
  
  //game over screen wenn over = 1
  else {
    fill(255);
    background(0);
    textSize(80);
    if(winner==1){
      text("Spieler 1 Gewinnt!", 80, 200);
    }
    if(winner==2){
      text("Spieler 2 Gewinnt!", 80, 200);
    }
  }
}

//restart
function mousePressed() {
  if (over == 1) {
    setup();
  }
}

//bewegen schläger
function keyPressed() {
  if (keyCode == 38) {
    uppressed = true;
  }

  if (keyCode == 40) {
    downpressed = true;
  }

  if (keyCode == 87) {
    wpressed = true;
  }

  if (keyCode == 83) {
    spressed = true;
  }
}

function keyReleased() {
  if (keyCode == 38) {
    uppressed = false;
  }

  if (keyCode == 40) {
    downpressed = false;
  }

  if (keyCode == 87) {
    wpressed = false;
  }

  if (keyCode == 83) {
    spressed = false;
  }
}

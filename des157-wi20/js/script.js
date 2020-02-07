


function setup() {
    var myCanvas = createCanvas(800,250);
    myCanvas.parent(mySketch);
  }
  
  function draw() {
  stroke(0,0,0);
    background(300);
    rectMode(CENTER);
  
  if (mouseX>500) {
      noStroke();
      rect(100,0,50,height);
      fill(250, 100,150,200);
    } else if (mouseX>480) {
      noStroke();
      rect(40,0,50,height);
      fill(250,0,100);
    } else if (mouseX>460) {
      noStroke();
     rect(160,0,50,height);
     fill(250,0,150);
    } else if (mouseX>440) {
      noStroke();
      rect(220,0,50,height);
      fill(250,0,200);
    } else if (mouseX>420){
      noStroke();
      rect(280,0,50,height);
      fill(250,50,250);
    
     } else if (mouseX>400) {
      noStroke();
      rect(340,0,50,height);
      fill(200,50,100);
    
     } else if (mouseX>380) {
      noStroke();
     rect(400,0,50,height);
    fill(200,100,20);
    
     } else if (mouseX>360) {
      noStroke();
      rect(460,0,50,height);
      fill(220,200,20);
    
     }else if (mouseX>340) {
      noStroke();
      rect(75,275,50,240);
      fill(220,250,20);
    
     } else if (mouseX>320) {
      noStroke();
      rect(135,275,50,240);
      fill(180,250,20);
    
     } else if (mouseX>300){
      noStroke();
      rect(195,275,50,240);
      fill(180,250,80);
    
     } else if (mouseX>280) {
      noStroke();
      rect(255,275,50,240);
        fill(180,250,180);
    
    } else if (mouseX>220){
      noStroke();
     rect(315,275,50,240);
     fill(180,250,220);
   
   } else if (mouseX>200) {
      noStroke();
      rect(375,275,50,240);
      fill(100,180,250);
   
   } else if (mouseX>180){
      noStroke();
     rect(435,275,50,240);
      fill(50,50,250);
    }
   
   
  }
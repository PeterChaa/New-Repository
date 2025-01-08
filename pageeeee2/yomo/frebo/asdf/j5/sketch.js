function setup() {
    createCanvas(innerWidth, innerHeight);
    background(random(0,225),random(0,245),random(0,225));
  }
  
  function draw() {
    rectMode(CENTER);
    fill(100,100,100,random(0,200));
    stroke(1,1,1);
    if (mouseY>200 && mouseX<200){
      fill(254,0,0)
    }
    
    ellipse(mouseX,mouseY,100,100,100,random(100,200));
  
  }

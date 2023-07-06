//Olivia Lusignan- Car

function setup() {
  createCanvas(windowWidth, windowWidth);
   print(windowWidth)
}

function draw() {
  //blue background
  //background(77, 166, 255)
  background(random(0, 255), random(0, 255), random(0, 255))

  //grey street
  fill(140, 140, 140)
  rect(windowWidth/2, 500, 700, 340)
  
  //car base
  noStroke()
  fill(255,0,0)
  rectMode(CENTER)
  rect(windowWidth/2, windowWidth/2, 400, 110)
  
  //car head
  rect(windowWidth/2, 245, 175, 100)
  
  //left and right of car head
  triangle(200, 300, 250, 194, 300, 300)
  triangle(370, 300, 420, 194, 470, 300)
  
  //car windows
  fill(255, 255, 255)
  rect(295, 245, 70, 70)
  rect(385, 245, 70, 70)
  triangle(230, 280, 260, 210, 310, 280)
 
  //car tires
  fill(0)
  ellipse(250, 400, 95, 95)
  ellipse(420, 400, 95, 95)
  
  fill(255, 255, 255)
  ellipse(250, 400, 55, 55)
  ellipse(420, 400, 55, 55)

 
  ;
}
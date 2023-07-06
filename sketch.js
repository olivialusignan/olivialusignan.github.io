//Olivia Lusignan- Car

function setup() {
  createCanvas(windowWidth, windowHeight);
   print(windowWidth)
}

function draw() {
  //blue background
  background(51, 133, 255)

    //grey street
  fill(140, 140, 140)
  rect(windowWidth/2, 550, windowWidth, windowHeight/2)

    //road lines
  fill(0)
  rect(windowWidth/2, 550, windowWidth, 25)


  strokeWeight(35)
  stroke(140, 140, 140)
  for(let i=0; i<windowWidth; i=i+80){
  line(i, 0, i, windowHeight)

  fill(51, 133, 2550)
  rect(windowWidth/2, 150, windowWidth, 450)

}


  
  //car base
  
  noStroke()
  fill(255,0,0)
  rectMode(CENTER)
  rect(windowWidth/2, windowHeight/2, 400, 110)
  
  //car head
  rect(windowWidth/2, 245, 175, 100)
  
  //left and right of car head
  triangle(550, 300, 600, 194, 650, 300)
  triangle(720, 300, 770, 194, 820, 300)
  
  //car windows
  fill(255, 255, 255)
  rect(645, 245, 70, 70)
  rect(735, 245, 70, 70)
  triangle(580, 280, 610, 210, 660, 280)
 
  //car tires
  fill(0)
  ellipse(600, 400, 95, 95)
  ellipse(770, 400, 95, 95)
  
  fill(255, 255, 255)
  ellipse(600, 400, 55, 55)
  ellipse(770, 400, 55, 55)


}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
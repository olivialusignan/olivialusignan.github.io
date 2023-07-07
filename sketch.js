//Olivia Lusignan- Car

let sun
let rotation = 0

let x = 0
let carGo = false
let carStop = false

function preload(){
  sun= loadImage('sun.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(windowWidth)
  imageMode(CENTER)
  angleMode(DEGREES)
}

function draw() {


  if(carGo == true){
    x = x + 1
  }
  if(carStop == true){
    x = x + 0
  }

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

  
rotation++

push()
rotate(radians(rotation))
image(sun, 0, 0)
pop()
  

}

  //car base
  
  noStroke()
  fill(255,0,0)
  rectMode(CENTER)
  rect(windowWidth/2 + x, windowHeight/2, 400, 110)
  
  //car head
  rect(windowWidth/2 + x, 245, 175, 100)
  
  //left and right of car head
  triangle(550 + x, 300, 600 + x, 194, 650 + x, 300)
  triangle(720 + x, 300, 770 + x, 194, 820 + x, 300)
  
  //car windows
  fill(255, 255, 255)
  rect(645 + x, 245, 70, 70)
  rect(735 + x, 245, 70, 70)
  triangle(580 + x, 280, 610 + x, 210, 660 + x, 280)
 
  //car tires
  fill(0)
  ellipse(600 + x, 400, 95, 95)
  ellipse(770 + x, 400, 95, 95)
  
  fill(255, 255, 255)
  ellipse(600 + x, 400, 55, 55)
  ellipse(770 + x, 400, 55, 55)

  textSize(40);
  text('If you want to go, press g', 500, 50);
  text('If you want to stop, press s', 500, 100);


}


function keyPressed(){
  if(key == 'g'){
    carGo = true 
    carStop = false

  }

  if(key == 's'){
    carGo = false 
    carStop = true
}
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
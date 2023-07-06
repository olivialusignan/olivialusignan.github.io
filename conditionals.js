let ellipseX = 300
let furby


function preload(){
	furby= loadImage('furby.png')
}


function setup() {

createCanvas(windowWidth, windowHeight)



// if(mouseIsPressed){
// 	background(187, 77, 170)
// 	ellipseX= 800
// }else{
// 	background(200, 180, 100)
// 	ellipseX = 300


for(let i=0; i<100; i++){
	ellipse(random(windowWidth), random(windowHeight), 20, 20)

}

}

function draw() {


for(let i=0; i<windowWidth; i=i+10){
	line(i, 0, i, windowHeight)

}

for(let i=0; i<windowHeight; i=i+10){
	line(0, i, windowWidth, i)

}


image(furby, mouseX, mouseY)

//ellipse(mouseX, mouseY, 60, 60)

print(ellipseX)

text('Olivia', 200, 200)

}

// function mouseClicked(){
// 	if(ellipseX ==300){
// 		ellipseX= 800
// 	}
// 	if(ellipseX == 800){
// 		ellipseX = 300
// 	}


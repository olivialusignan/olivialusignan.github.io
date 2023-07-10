//Final Project- Global Spotify

let spotifyLogo

let homePageBool = true
let mainScreenBool = false

let fontButton
let spotifyMainScreen
let map

function preload(){
	spotifyLogo = loadImage('spotifyLogo.jpeg')
	spotifyMainScreen = loadImage('spotifyMainScreen.jpg')
	map = loadImage('map.png')
}

//function preload() {
  //fontButton = loadFont('Ysabeau_SC')
//}

function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)
	textAlign(CENTER)

}

function draw(){
	background(0)

	if(homePageBool == true){
		homePage()
	}

	if(mainScreenBool ==true){
		mainScreen()
	}

}

function homePage(){
	image(spotifyLogo, windowWidth/2, windowHeight/2, windowWidth, windowHeight)

	
	fill(255, 255, 255, 100)
	ellipse(1110, 297, 75, 75)

	if(mouseX >= 1072.5 && mouseX <= 1145.5 && mouseY >= 261.5 && mouseY <= 332.5 == true)
	fill("white")
	ellipse(1110, 297, 75, 75)

	fill("black")
	triangle(1100, 275, 1100, 320, 1130, 297)

	//textFont(fontButton);
	fill(255, 255, 255, 100)
	textSize(28)
	text("Begin Listening" , 1253, 310)


	fill(255, 255, 255, 100)
	stroke(255, 255, 255)
	strokeWeight(1)
	textSize(60)
	text("Worldwide" , 170, 270)
	text("Spotify" , 170, 330)

	
	if(mouseX >= 1072.5 && mouseX <= 1145.5 && mouseY >= 261.5 && mouseY <= 332.5 && mouseIsPressed == true){
		homePageBool = false
		mainScreenBool = true 
		
	}

	
}

function mainScreen(){

	background("white")

	image(spotifyMainScreen, windowWidth/2, windowHeight/2, windowWidth, windowHeight)

	image(map, 800, 315, 1150, 528)

	

}




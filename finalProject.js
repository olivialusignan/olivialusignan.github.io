//Final Project- Global Spotify


//home screen world spotify logo
let spotifyLogo

let homePageBool = true
let mainScreenBool = false
let northAmericaBool = false
let badBunnyBool = false

//images
let spotifyMainScreen
let map
let NAconcert
let furby

//fonts
let conthraxFont
let titleFont


function preload(){
	spotifyLogo = loadImage('spotifyLogo.jpeg')
	spotifyMainScreen = loadImage('spotifyMainScreen.png')
	map = loadImage('World-Map-PNG-Photos.png')
	conthraxFont= loadFont('conthrax-sb.otf')
	titleFont = loadFont('spaceranger.ttf')
	NAconcert = loadImage('NAconcert.jpeg')
	furby = loadImage('furby.png')
}



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

	if(northAmericaBool ==true){
		northAmerica()
	}

	if(badBunnyBool ==true){
		badBunny()
	}

}

function homePage(){
	image(spotifyLogo, 1366/2, 660/2, 1366, 660)

	
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

function noMapMainScreen(){
	//white on the sides
	background("white")

	//main screen
	image(spotifyMainScreen, 683, 330, 1366, 660)
	//map in main screen

}

function mainScreen(){

	noMapMainScreen()
	image(map, 780, 302, 945, 510)


	//continent names
	noStroke()
	textFont(conthraxFont)
	textSize(17)
	fill("white")
	text("North " , 493, 210)
	text("America" , 493, 230)
	text("South " , 600, 395)
	text("America" , 603, 415)
	text("Europe" , 810, 210)
	text("Australia" , 1100, 458)
	textSize(20)
	text("Africa" , 785, 320)
	text("Asia" , 990, 225)

	if(mouseX >= 380 && mouseX <= 620 && mouseY >= 50 && mouseY <= 350 == true){
		textSize(17)
		fill("blue")
		text("North " , 493, 210)
		text("America" , 493, 230)

}

if(mouseX >= 530 && mouseX <= 690 && mouseY >= 350 && mouseY <= 510 == true){
		textSize(17)
		fill("blue")
		text("South " , 600, 395)
		text("America" , 603, 415)
	}

if(mouseX >= 720 && mouseX <= 900 && mouseY >= 100 && mouseY <= 275 == true){
		textSize(17)
		fill("blue")
		text("Europe" , 810, 210)
	}

if(mouseX >= 901 && mouseX <= 1130 && mouseY >= 90 && mouseY <= 310 == true){
		textSize(20)
		fill("blue")
		text("Asia" , 990, 225)
	}

if(mouseX >= 710 && mouseX <= 890 && mouseY >= 275 && mouseY <= 450 == true){
		textSize(20)
		fill("blue")
		text("Africa" , 785, 320)
	}

	if(mouseX >= 1050 && mouseX <= 1150 && mouseY >= 400 && mouseY <= 500 == true){
		textSize(17)
		fill("blue")
		text("Australia" , 1100, 458)
	}

	if(mouseX >= 380 && mouseX <= 620 && mouseY >= 50 && mouseY <= 350 == true && mouseIsPressed == true){
				northAmericaBool = true
			}
	

}


function northAmerica(){


noMapMainScreen()

image(NAconcert, 1050, 310, 350, 350)

fill("white")
textSize(55)
textFont(titleFont)
text("North America", 770, 80)
textSize(32)
textFont(conthraxFont)
text("Top Trending Artists:", 600, 150)
text("1. Bad Bunny", 535, 250)
text("2. Taylor Swift", 550, 350)
text("3. Harry Styles", 550, 450)

if(mouseX >= 405 && mouseX <= 655 && mouseY >= 200 && mouseY <= 290 == true){
	fill("blue")
	text("1. Bad Bunny", 535, 250)
}

if(mouseX >= 405 && mouseX <= 685 && mouseY >= 300 && mouseY <= 390 == true){
	fill("blue")
	text("2. Taylor Swift", 550, 350)
	}

if(mouseX >= 405 && mouseX <= 695 && mouseY >= 400 && mouseY <= 490 == true){
	fill("blue")
	text("3. Harry Styles", 550, 450)
	}

if(mouseX >= 405 && mouseX <= 655 && mouseY >= 200 && mouseY <= 290 == true && mouseIsPressed == true){
	badBunnyBool = true

	}

}

function badBunny(){
noMapMainScreen()

fill("white")
textSize(55)
textFont(titleFont)
text("Bad Bunny", 760, 80)
textSize(32)
textFont(conthraxFont)
text("Top Song:", 550, 200)
	
}










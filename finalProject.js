//Final Project- Global Spotify


//home screen world spotify logo
let spotifyLogo

let homePageBool = true
let mainScreenBool = false
let northAmericaBool = false
let badBunnyBool = false
let taylorSwiftBool = false
let harryStylesBool = false
let southAmericaBool = false
let karolGBool = false
let alejandroBool = false
let eslabonBool = false
let africaBool = false
let wizzKidBool = false
let burnaBoyBool = false
let temsBool = false
let asiaBool = false
let BTSBool = false
let blackPinkBool = false
let jayChouBool = false
let europeBool = false
let edSheeranBool = false
let drakeBool = false
let justinBool = false
let backButtonBool = false
let noMapMainScreenBool = false

//images
let spotifyMainScreen
let map
let NAconcert
let blueStars
let redStars
let badBunny1
let red
let taylorSwift1
let harryStyles1
let SAconcert
let Aconcert
let ASconcert
let dilesAlbum
let blankSpaceAlbum
let asItWasAlbum
let alejandro1
let todoDeTiAlbum
let tQGAlbum
let eslabon1
let ellaAlbum
let wizzkid1
let burnaBoy1
let tems1
let BTS1
let blackPink1
let jayChou1
let butterAlbum
let boomAlbum
let iTrulyBelieveAlbum
let greenStars
let orangeStars
let tealStars
let yellowStars

//buttons
let badBunnyButton
let taylorSwiftButton
let harryStylesButton
let karolGButton
let alejandroButton
let eslabonButton
let dilesButton
let blankSpaceButton
let asItWasButton
let tQGButton
let todoDeTiButton
let ellaButton
let wizzKidButton
let burnaBoyButton
let temsButton
let essenceButton
let lastButton
let freeMindButton
let bTSButton
let butterButton
let blackPinkButton
let boomButton
let jayChouButton
let iTrulyBelieveButton
let edSheeranButton
let drakeButton
let justinButton
let shapeOfYouButton
let oneDanceButton
let babyButton
let backButton

let diles
let audioSlider

//fonts
let conthraxFont
let titleFont

let canvas

function preload(){
	spotifyLogo = loadImage('spotifyLogo.jpeg')
	spotifyMainScreen = loadImage('spotifyMainScreen.png')
	map = loadImage('World-Map-PNG-Photos.png')
	conthraxFont= loadFont('conthrax-sb.otf')
	titleFont = loadFont('spaceranger.ttf')
	NAconcert = loadImage('NAconcert.jpeg')
	SAconcert = loadImage('SAconcert.jpeg')
	Aconcert = loadImage('AConcert.jpg')
	ASconcert = loadImage('ASconcert.jpeg')
	EConcert = loadImage('EConcert.jpeg')
	blueStars = loadImage('blueStars.jpg')
	redStars = loadImage('redStars.jpg')
	badBunny1 = loadImage('badBunny1.jpeg')
	diles = loadSound('diles.mp3')
	dilesAlbum = loadImage('dilesAlbum.jpeg')
	red = loadImage('red.png')
	taylorSwift1 = loadImage('taylorSwift1.jpeg')
	blankSpaceAlbum = loadImage('blankSpaceAlbum.jpeg')
	blankSpace = loadSound('blankSpace.mp3')
	harryStyles1 = loadImage('harryStyles1.png')
	asItWasAlbum = loadImage('asItWasAlbum.png')
	asItWas = loadSound('asItWas.mp3')
	karolG1 = loadImage('karolG.png')
	tQG = loadSound('TQG.mp3')
	tQGAlbum = loadImage('tQGAlbum.jpeg')
	alejandro1 = loadImage('alejandro.png')
	todoDeTi = loadSound('todoDeTi.mp3')
	todoDeTiAlbum = loadImage('todoDeTiAlbum.jpeg')
	eslabon1 = loadImage('eslabon.png')
	ella = loadSound('ella.mp3')
	ellaAlbum = loadImage('ellaAlbum.png')
	wizzkid1 = loadImage('wizzkid1.png')
	essence = loadSound('essence.mp3')
	essenceAlbum = loadImage('essenceAlbum.jpeg')
	burnaBoy1= loadImage('burnaBoy1.png')
	last = loadSound('last.mp3')
	lastAlbum = loadImage('lastAlbum.png')
	tems1 = loadImage('tems1.png')
	freeMind = loadSound('freeMind.mp3')
	freeMindAlbum = loadImage('freeMind.jpeg')
	BTS1 = loadImage('BTS1.png')
	butter = loadSound('butter.mp3')
	butterAlbum = loadImage('butterAlbum.png')
	blackPink1 = loadImage('blackPink1.png')
	boom = loadSound('boom.mp3')
	boomAlbum = loadImage('boomAlbum.jpeg')
	jayChou1 = loadImage('jayChou1.png')
	iTrulyBelieve = loadSound('iTrulyBelieve.mp3')
	iTrulyBelieveAlbum = loadImage('iTrulyBelieveAlbum.jpeg')
	edSheeran1 = loadImage('edSheeran1.png')
	shapeOfYou = loadSound('shapeOfYou.mp3')
	shapeOfYouAlbum = loadImage('shapeOfYouAlbum.jpeg')
	drake1 = loadImage('drake1.png')
	oneDance = loadSound('oneDance.mp3')
	oneDanceAlbum = loadImage('oneDanceAlbum.jpeg')
	justin1 = loadImage('justin1.jpeg')
	baby = loadSound('baby.mp3')
	babyAlbum = loadImage('babyAlbum.jpeg')
	backButton1 = loadImage('backButton.png')
	profilePic = loadImage('profilePic.png')
	playButtonPic = loadImage('playButtonPic.png')
	bluePlayButtonPic = loadImage('bluePlayButtonPic.png')
	greenStars = loadImage('greenStars.jpg')
	yellowStars = loadImage('yellowStars.jpg')
	orangeStars = loadImage('orangeStars.jpg')
	tealStars = loadImage('tealStars.jpg')
	blueBackButton = loadImage('blueBackButton.png')
	pauseButton = loadImage('pauseButton.png')
	
}



function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style('z-index', '-1')
	canvas.position(0, 0)

	imageMode(CENTER)
	textAlign(CENTER)

	badBunnyButton = createButton('1. Bad Bunny')
	badBunnyButton.position(390, 220)
	badBunnyButton.mousePressed(badBunny)
	badBunnyButton.hide()

	dilesButton = createButton('')
	dilesButton.position(450, 595)
	dilesButton.mousePressed(playDiles)
	dilesButton.addClass('playButton')
	dilesButton.hide()

	audioSlider = createSlider(0, 1, 1, 0.01)
	audioSlider.position(1000, 610)

	print(diles.duration())

	taylorSwiftButton = createButton('2. Taylor Swift')
	taylorSwiftButton.position(390, 310)
	taylorSwiftButton.mousePressed(taylorSwift)
	taylorSwiftButton.hide()

	blankSpaceButton = createButton('')
	blankSpaceButton.position(450, 600)
	blankSpaceButton.mousePressed(playBlankSpace)
	blankSpaceButton.addClass('playButton')
	blankSpaceButton.hide()

	harryStylesButton = createButton('3. Harry Styles')
	harryStylesButton.position(390, 400)
	harryStylesButton.mousePressed(harryStyles)
	harryStylesButton.hide()

	asItWasButton = createButton('')
	asItWasButton.position(450, 600)
	asItWasButton.mousePressed(playAsItWas)
	asItWasButton.addClass('playButton')
	asItWasButton.hide()

	karolGButton = createButton('1. Karol G')
	karolGButton.position(390, 220)
	karolGButton.mousePressed(karolG)
	karolGButton.hide()

	tQGButton = createButton('')
	tQGButton.position(450, 600)
	tQGButton.mousePressed(playTQG)
	tQGButton.addClass('playButton')
	tQGButton.hide()

	alejandroButton = createButton('2. Rauw Alejandro')
	alejandroButton.position(390, 310)
	alejandroButton.mousePressed(alejandro)
	alejandroButton.hide()

	todoDeTiButton = createButton('')
	todoDeTiButton.position(450, 600)
	todoDeTiButton.mousePressed(playTodoDeTi)
	todoDeTiButton.addClass('playButton')
	todoDeTiButton.hide()

	eslabonButton = createButton('3. Eslabon Armado')
	eslabonButton.position(390, 400)
	eslabonButton.mousePressed(eslabon)
	eslabonButton.hide()

	ellaButton = createButton('')
	ellaButton.position(450, 600)
	ellaButton.mousePressed(playElla)
	ellaButton.addClass('playButton')
	ellaButton.hide()

	wizzKidButton = createButton('1. Wizzkid')
	wizzKidButton.position(390, 220)
	wizzKidButton.mousePressed(wizzKid)
	wizzKidButton.hide()

	essenceButton = createButton('')
	essenceButton.position(450, 600)
	essenceButton.mousePressed(playEssence)
	essenceButton.addClass('playButton')
	essenceButton.hide()

	burnaBoyButton = createButton('2. Burna Boy')
	burnaBoyButton.position(390, 310)
	burnaBoyButton.mousePressed(burnaBoy)
	burnaBoyButton.hide()

	lastButton = createButton('')
	lastButton.position(450, 600)
	lastButton.mousePressed(playLast)
	lastButton.addClass('playButton')
	lastButton.hide()

	temsButton = createButton('3. Tems')
	temsButton.position(390, 400)
	temsButton.mousePressed(tems)
	temsButton.hide()

	freeMindButton = createButton('')
	freeMindButton.position(450, 600)
	freeMindButton.mousePressed(playLast)
	freeMindButton.addClass('playButton')
	freeMindButton.hide()

	bTSButton = createButton('1. BTS')
	bTSButton.position(390, 220)
	bTSButton.mousePressed(bTS)
	bTSButton.hide()

	butterButton = createButton('')
	butterButton.position(450, 600)
	butterButton.mousePressed(playButter)
	butterButton.addClass('playButton')
	butterButton.hide()

	blackPinkButton = createButton('2. Blackpink')
	blackPinkButton.position(390, 310)
	blackPinkButton.mousePressed(blackPink)
	blackPinkButton.hide()

	boomButton = createButton('')
	boomButton.position(450, 600)
	boomButton.mousePressed(playBoom)
	boomButton.addClass('playButton')
	boomButton.hide()

	jayChouButton = createButton('3. Jay Chou')
	jayChouButton.position(390, 400)
	jayChouButton.mousePressed(jayChou)
	jayChouButton.hide()

	iTrulyBelieveButton = createButton('')
	iTrulyBelieveButton.position(450, 600)
	iTrulyBelieveButton.mousePressed(playITrulyBelieve)
	iTrulyBelieveButton.addClass('playButton')
	iTrulyBelieveButton.hide()

	edSheeranButton = createButton('1. Ed Sheeran')
	edSheeranButton.position(390, 220)
	edSheeranButton.mousePressed(edSheeran)
	edSheeranButton.hide()

	shapeOfYouButton = createButton('play')
	shapeOfYouButton.position(450, 600)
	shapeOfYouButton.mousePressed(playShapeOfYou)
	shapeOfYouButton.addClass('playButton')
	shapeOfYouButton.hide()

	drakeButton = createButton('2. Drake')
	drakeButton.position(390, 310)
	drakeButton.mousePressed(drake)
	drakeButton.hide()

	oneDanceButton = createButton('')
	oneDanceButton.position(450, 600)
	oneDanceButton.mousePressed(playOneDance)
	oneDanceButton.addClass('playButton')
	oneDanceButton.hide()

	justinButton = createButton('3. Justin Bieber')
	justinButton.position(390, 400)
	justinButton.mousePressed(justin)
	justinButton.hide()

	babyButton = createButton('play')
	babyButton.position(450, 600)
	babyButton.mousePressed(playBaby)
	babyButton.addClass('playButton')
	babyButton.hide()

	backButton = createButton('')
	backButton.position(330, 30)
	backButton.mousePressed(back)
	backButton.addClass('backButtonClass')
	backButton.hide()



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

	if(taylorSwiftBool ==true){
		taylorSwift()
	}

	if(harryStylesBool ==true){
		harryStyles()
	}

	if(southAmericaBool ==true){
		southAmerica()
	}

	if(karolGBool ==true){
		karolG()
	}

	if(alejandroBool == true){
		alejandro()
	}

	if(eslabonBool == true){
		eslabon()
	}

	if(africaBool == true){
		africa()
	}

	if(wizzKidBool == true){
		wizzKid()
	}

	if(burnaBoyBool == true){
		burnaBoy()
	}

	if(temsBool == true){
		tems()
	}

	if(asiaBool == true){
		asia()
	}

	if(BTSBool == true){
		bTS()
	}

	if(blackPinkBool == true){
		blackPink()
	}

	if(jayChouBool == true){
		jayChou()
	}

	if(europeBool == true){
		europe()
	}	

	if(edSheeranBool == true){
		edSheeran()
	}

	if(drakeBool == true){
		drake()
	}

	if(justinBool == true){
		justin()
	}

	if(backButtonBool ==true){
	back()

}

	if(noMapMainScreenBool ==true){
		noMapMainScreen()
	}


}

function homePage(){

	audioSlider.hide()

	image(spotifyLogo, 1366/2, 660/2, 1366, 660)

	
	fill(255, 255, 255, 100)
	ellipse(1110, 497, 75, 75)

	if(mouseX >= 1050 && mouseX <= 1150 && mouseY >= 400 && mouseY <= 500 == true)
	fill("white")
	ellipse(1110, 497, 75, 75)

	fill("black")
	triangle(1100, 475, 1100, 520, 1130, 497)

	//textFont(fontButton);
	fill(255, 255, 255, 100)
	textSize(28)
	text("Begin Listening" , 1253, 510)


	fill(255, 255, 255, 100)
	stroke(255, 255, 255)
	strokeWeight(1)
	textSize(60)
	text("Worldwide" , 170, 270)
	text("Spotify" , 170, 330)

	
	if(mouseX >= 1060 && mouseX <= 1155 && mouseY >= 480 && mouseY <= 580 == true && mouseIsPressed == true){
		homePageBool = false
		mainScreenBool = true 
		
	}

	
}

function noMapMainScreen(){
	//white on the sides

	audioSlider.show()

	backButton.show()

	background("white")

	//main screen
	image(spotifyMainScreen, 683, 330, 1366, 660)
	//map in main screen

	fill(89, 89, 89)
	noStroke()
	textSize(18)
	text("Worldwide" , 200, 130)
	text("Spotify" , 200, 165)

	textFont(conthraxFont)
	text("Your Top Picks:", 210, 290)
	fill(0, 51, 102)
	text("Tems", 200, 340)
	text("Bad Bunny", 200, 390)
	text("Taylor Swift", 200, 440)
	text("BTS", 200, 490)
	text("Drake", 200, 540)

	fill(51, 51, 51)
	rect(1060, 25, 190, 45, 20)
	image(profilePic, 1095, 49, 40, 40)

	fill("white")
	textSize(15)
	text("user123_45", 1175, 55)

}

function mainScreen(){

badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()

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
	textSize(20)
	text("Africa" , 785, 320)
	text("Asia" , 990, 225)

	if(mouseX >= 380 && mouseX <= 620 && mouseY >= 100 && mouseY <= 350 == true){
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


	if(mouseX >= 380 && mouseX <= 620 && mouseY >= 50 && mouseY <= 350 == true && mouseIsPressed == true){
				northAmericaBool = true
			}

	if(mouseX >= 530 && mouseX <= 690 && mouseY >= 350 && mouseY <= 510 == true && mouseIsPressed == true){
			southAmericaBool = true
		}

	if(mouseX >= 710 && mouseX <= 890 && mouseY >= 275 && mouseY <= 450 == true && mouseIsPressed == true){
			africaBool = true
		}

	if(mouseX >= 901 && mouseX <= 1130 && mouseY >= 90 && mouseY <= 310 == true && mouseIsPressed == true){
			asiaBool = true
		}

	if(mouseX >= 720 && mouseX <= 900 && mouseY >= 100 && mouseY <= 275 == true && mouseIsPressed == true){
			europeBool = true
		}

	

}


function northAmerica(){

dilesButton.hide()
blankSpaceButton.hide()
asItWasButton.hide()
tQGButton.hide()
todoDeTiButton.hide()
ellaButton.hide()
essenceButton.hide()
lastButton.hide()
freeMindButton.hide()
butterButton.hide()
boomButton.hide()
iTrulyBelieveButton.hide()
shapeOfYouButton.hide()
oneDanceButton.hide()
babyButton.hide()

mainScreenBool = false

karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()

noMapMainScreen()

badBunnyButton.show()
taylorSwiftButton.show()
harryStylesButton.show()

image(blueStars, 785, 290, 955, 580)
image(NAconcert, 1050, 310, 350, 350)

fill("white")
textSize(55)
textFont(titleFont)
text("North America", 770, 80)
textSize(32)
textFont(conthraxFont)
text("Top Trending Artists:", 600, 150)

}

function badBunny(){
noMapMainScreen()
badBunnyBool = true
badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()

//northAmericaBool =false

image(badBunny1, 970, 288, 590, 575)
image(red, 560, 288, 500, 575)
image(dilesAlbum, 240, 620, 70, 70)

fill("white")
textSize(55)
textFont(titleFont)
text("Bad Bunny", 760, 80)
textSize(32)
textFont(conthraxFont)
text("Top Song:", 550, 200)
textSize(50)
text("Diles", 550, 350)
textSize(25)
text("feat. Arcangel, Nengo Flow, ", 560, 400)
text("Dj Luian & Mambo Kings", 560, 430)
text("Diles", 330, 630)

dilesButton.show()

diles.setVolume(audioSlider.value())
print(audioSlider.value())

/*print(int(diles.time()))
fill("purple")
textSize(30)
text(int(diles.time()), 300, 400)*/

}


function taylorSwift(){

noMapMainScreen()
badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()

blankSpaceButton.show()

taylorSwiftBool = true

image(taylorSwift1, 1000, 288, 800, 577)
fill("white")
rect(310, 0, 400, 577)
image(blankSpaceAlbum, 230, 620, 70, 70)

textSize(50)
text("Blank Space", 550, 350)
fill("black")
textSize(55)
textFont(titleFont)
text("Taylor Swift", 760, 80)
text("Blank Space", 550, 350)
textSize(32)
textFont(conthraxFont)
text("Top Song:", 550, 200)
fill("white")
textSize(15)
text("Blank Space", 333, 624)

blankSpace.setVolume(audioSlider.value())
print(audioSlider.value())

}

function harryStyles(){
southAmericaBool = false
noMapMainScreen()
harryStylesBool = true

badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()

asItWasButton.show()

image(harryStyles1, 965, 288, 590, 575)
fill("black")
rect(305, 0, 397, 577)

image(asItWasAlbum, 240, 620, 70, 70)
fill("white")
textSize(55)
textFont(titleFont)
text("Harry Styles", 760, 80)
text("As It Was", 550, 350)
textSize(32)
textFont(conthraxFont)
text("Top Song:", 550, 200)
textSize(15)
text("As It Was", 333, 624)

asItWas.setVolume(audioSlider.value())
print(audioSlider.value())

}

function southAmerica(){

dilesButton.hide()
blankSpaceButton.hide()
asItWasButton.hide()
tQGButton.hide()
todoDeTiButton.hide()
ellaButton.hide()
essenceButton.hide()
lastButton.hide()
freeMindButton.hide()
butterButton.hide()
boomButton.hide()
iTrulyBelieveButton.hide()
shapeOfYouButton.hide()
oneDanceButton.hide()
babyButton.hide()

badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()

noMapMainScreen()
image(redStars, 785, 290, 955, 580)

karolGButton.show()
alejandroButton.show()
eslabonButton.show()

image(SAconcert, 1050, 330, 370, 350)

fill("white")
textSize(55)
textFont(titleFont)
text("South America", 770, 80)
textSize(32)
textFont(conthraxFont)
text("Top Trending Artists:", 600, 150)

}





function karolG(){
noMapMainScreen()

badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()

tQGButton.show()

karolGBool = true

image(karolG1, 785, 290, 955, 580)
image(tQGAlbum, 240, 620, 70, 70)

fill("white")
textSize(55)
textFont(titleFont)
text("Karol G", 760, 80)
text("TQG", 550, 350)
textFont(conthraxFont)
textSize(15)
text("TQG", 328, 624)
textSize(32)
text("Top Song:", 550, 200)

tQG.setVolume(audioSlider.value())
print(audioSlider.value())

}


function alejandro(){
noMapMainScreen()

badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()

todoDeTiButton.show()

alejandroBool = true

image(alejandro1, 785, 290, 955, 580)

fill("white")
textSize(55)
image(todoDeTiAlbum, 240, 620, 70, 70)
textFont(titleFont)
text("Todo De Ti", 550, 350)
text("Rauw Alejandro", 760, 80)
textFont(conthraxFont)
textSize(15)
text("Todo De Ti", 333, 624)
textSize(32)
textFont(conthraxFont)
text("Top Song:", 550, 200)

todoDeTi.setVolume(audioSlider.value())
print(audioSlider.value())

}

function eslabon(){
noMapMainScreen()

badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()

ellaButton.show()


eslabonBool = true

image(eslabon1, 785, 290, 955, 580)
image(ellaAlbum, 240, 620, 70, 70)

fill("white")
textSize(45)
textFont(titleFont)
text("Eslabon Armado", 760, 80)
text("Ella Baila Sola", 536, 350)
textFont(conthraxFont)
textSize(15)
text("Ella Baila Sola", 343, 624)
textSize(32)
textFont(conthraxFont)
text("Top Song:", 550, 200)

ella.setVolume(audioSlider.value())
print(audioSlider.value())

}

function africa(){

dilesButton.hide()
blankSpaceButton.hide()
asItWasButton.hide()
tQGButton.hide()
todoDeTiButton.hide()
ellaButton.hide()
essenceButton.hide()
lastButton.hide()
freeMindButton.hide()
butterButton.hide()
boomButton.hide()
iTrulyBelieveButton.hide()
shapeOfYouButton.hide()
oneDanceButton.hide()
babyButton.hide()

badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()

noMapMainScreen()
image(yellowStars, 785, 290, 955, 580)

wizzKidButton.show()
burnaBoyButton.show()
temsButton.show()

image(Aconcert, 1050, 330, 370, 350)

fill("white")
textSize(55)
textFont(titleFont)
text("Africa", 770, 80)
textSize(32)
textFont(conthraxFont)
text("Top Trending Artists:", 600, 150)

}


function wizzKid(){
noMapMainScreen()

badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()

essenceButton.show()

wizzKidBool = true

image(wizzkid1, 785, 290, 955, 580)
image(essenceAlbum, 240, 620, 70, 70)

fill("white")
textSize(55)
textFont(titleFont)
text("Wizz Kid", 760, 80)
text("Essence", 550, 350)
textFont(conthraxFont)
textSize(15)
text("Essence", 328, 624)
textSize(32)
text("Top Song:", 550, 200)

essence.setVolume(audioSlider.value())
print(audioSlider.value())

}



function burnaBoy(){
noMapMainScreen()

badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()

lastButton.show()

burnaBoyBool = true

image(burnaBoy1, 785, 290, 955, 580)
image(lastAlbum, 240, 620, 70, 70)

fill("white")
textSize(55)
textFont(titleFont)
text("Burna Boy", 760, 80)
text("Last Last", 550, 350)
textFont(conthraxFont)
textSize(15)
text("Last Last", 328, 624)
textSize(32)
text("Top Song:", 550, 200)

last.setVolume(audioSlider.value())
print(audioSlider.value())

}

function tems(){
noMapMainScreen()

badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()
freeMindButton.show()

temsBool = true

image(tems1, 785, 290, 955, 580)
image(freeMindAlbum, 240, 620, 70, 70)

fill("white")
textSize(55)
textFont(titleFont)
text("Tems", 760, 80)
text("Free Mind", 550, 350)
textFont(conthraxFont)
textSize(15)
text("Free Mind", 328, 624)
textSize(32)
text("Top Song:", 550, 200)

freeMind.setVolume(audioSlider.value())
print(audioSlider.value())

}


function asia(){

dilesButton.hide()
blankSpaceButton.hide()
asItWasButton.hide()
tQGButton.hide()
todoDeTiButton.hide()
ellaButton.hide()
essenceButton.hide()
lastButton.hide()
freeMindButton.hide()
butterButton.hide()
boomButton.hide()
iTrulyBelieveButton.hide()
shapeOfYouButton.hide()
oneDanceButton.hide()
babyButton.hide()

badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()

noMapMainScreen()

image(orangeStars, 785, 290, 955, 580)

bTSButton.show()
blackPinkButton.show()
jayChouButton.show()

image(ASconcert, 1050, 330, 370, 350)

fill("white")
textSize(55)
textFont(titleFont)
text("Asia", 770, 80)
textSize(32)
textFont(conthraxFont)
text("Top Trending Artists:", 600, 150)


}



function bTS(){
noMapMainScreen()
BTSBool = true
asiaBool = false
butterButton.show()

badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()


image(BTS1, 785, 290, 955, 580)
image(butterAlbum, 240, 620, 70, 70)

fill("white")
textSize(55)
textFont(titleFont)
text("BTS", 490, 80)
text("Butter", 490, 350)
textFont(conthraxFont)
textSize(15)
text("Butter", 328, 624)
textSize(32)
text("Top Song:", 490, 200)

butter.setVolume(audioSlider.value())
print(audioSlider.value())

}

function blackPink(){
noMapMainScreen()
blackPinkBool = true
asiaBool = false
boomButton.show()

badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()


image(blackPink1, 785, 290, 955, 580)
image(boomAlbum, 240, 620, 70, 70)

fill("white")
textSize(55)
textFont(titleFont)
text("Blackpink", 490, 80)
text("BOOMBAYAH", 490, 330)
textFont(conthraxFont)
textSize(15)
text("BOOMBAYAH", 348, 624)
textSize(32)
text("Top Song:", 490, 200)

boom.setVolume(audioSlider.value())
print(audioSlider.value())

}

function jayChou(){
noMapMainScreen()
jayChouBool = true
asiaBool = false
iTrulyBelieveButton.show()

badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()


image(jayChou1, 785, 290, 955, 580)
image(iTrulyBelieveAlbum, 240, 620, 70, 70)

fill("white")
textSize(55)
textFont(titleFont)
text("Jay Chou", 490, 80)
textSize(45)
text("I Truly Believe", 500, 330)
textFont(conthraxFont)
textSize(15)
text("I Truly Believe", 348, 624)
textSize(32)
text("Top Song:", 490, 200)

iTrulyBelieve.setVolume(audioSlider.value())
print(audioSlider.value())

}

function europe(){

dilesButton.hide()
blankSpaceButton.hide()
asItWasButton.hide()
tQGButton.hide()
todoDeTiButton.hide()
ellaButton.hide()
essenceButton.hide()
lastButton.hide()
freeMindButton.hide()
butterButton.hide()
boomButton.hide()
iTrulyBelieveButton.hide()
shapeOfYouButton.hide()
oneDanceButton.hide()
babyButton.hide()

badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()

mainScreenBool = false
noMapMainScreen()
image(tealStars, 785, 290, 955, 580)

edSheeranButton.show()
drakeButton.show()
justinButton.show()

image(EConcert, 1050, 330, 370, 350)

fill("white")
textSize(55)
textFont(titleFont)
text("Europe", 770, 80)
textSize(32)
textFont(conthraxFont)
text("Top Trending Artists:", 600, 150)

}

function edSheeran(){
noMapMainScreen()
edSheeranBool = true
europeBool = false
shapeOfYouButton.show()

badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()


image(edSheeran1, 785, 290, 955, 580)
image(shapeOfYouAlbum, 240, 620, 70, 70)

fill("white")
textSize(55)
textFont(titleFont)
text("Ed Sheeran", 510, 80)
text("Shape Of You", 510, 350)
textFont(conthraxFont)
textSize(15)
text("Shape Of You", 340, 624)
textSize(32)
text("Top Song:", 490, 200)

shapeOfYou.setVolume(audioSlider.value())
print(audioSlider.value())

}

function drake(){
noMapMainScreen()
drakeBool = true
europeBool = false
oneDanceButton.show()

badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()


image(drake1, 785, 290, 955, 580)
image(oneDanceAlbum, 240, 620, 70, 70)

fill("white")
textSize(55)
textFont(titleFont)
text("Drake", 490, 80)
text("One Dance", 490, 350)
textFont(conthraxFont)
textSize(15)
text("One Dance", 328, 624)
textSize(32)
text("Top Song:", 490, 200)

oneDance.setVolume(audioSlider.value())
print(audioSlider.value())

}

function justin(){
noMapMainScreen()
justinBool = true
europeBool = false
//butterButton.show()

badBunnyButton.hide()
taylorSwiftButton.hide()
harryStylesButton.hide()
karolGButton.hide()
alejandroButton.hide()
eslabonButton.hide()
wizzKidButton.hide()
burnaBoyButton.hide()
temsButton.hide()
bTSButton.hide()
blackPinkButton.hide()
jayChouButton.hide()
edSheeranButton.hide()
drakeButton.hide()
justinButton.hide()


image(justin1, 785, 290, 955, 580)
image(babyAlbum, 240, 620, 70, 70)

fill("white")
textSize(55)
textFont(titleFont)
text("Justin Bieber", 505, 80)
text("Baby", 490, 350)
textFont(conthraxFont)
textSize(15)
text("Baby", 328, 624)
textSize(32)
text("Top Song:", 490, 200)

babyButton.show()

baby.setVolume(audioSlider.value())
print(audioSlider.value())

}

function back(){

mainScreenBool = true


northAmericaBool = false
badBunnyBool = false
taylorSwiftBool = false
harryStylesBool = false
southAmericaBool = false
karolGBool = false
alejandroBool = false
eslabonBool = false
africaBool = false
wizzKidBool = false
burnaBoyBool = false
temsBool = false
asiaBool = false
BTSBool = false
blackPinkBool = false
jayChouBool = false
europeBool = false
edSheeranBool = false
drakeBool = false
justinBool = false
noMapMainScreenBool = false


}



function playDiles(){
	if(!diles.isPlaying()){
		diles.loop()
		dilesButton.html('')
		dilesButton.style('background-image', "url('pauseButton.png')")
	}else{
		diles.pause()
		dilesButton.html('')
		dilesButton.style('background-image', "url('playButtonPic.png')")
	}

}

function playBlankSpace(){
	if(!blankSpace.isPlaying()){
		blankSpace.loop()
		blankSpaceButton.html('')
		blankSpaceButton.style('background-image', "url('pauseButton.png')")
	}else{
		blankSpace.pause()
		blankSpaceButton.html('')
		blankSpaceButton.style('background-image', "url('playButtonPic.png')")
	}

}

function playAsItWas(){
	if(!asItWas.isPlaying()){
		asItWas.loop()
		asItWasButton.html('')
		asItWasButton.style('background-image', "url('pauseButton.png')")
	}else{
		asItWas.pause()
		asItWasButton.html('')
		asItWasButton.style('background-image', "url('playButtonPic.png')")
	}

}

function playTQG(){
	if(!tQG.isPlaying()){
		tQG.loop()
		tQGButton.html('')
		tQGButton.style('background-image', "url('pauseButton.png')")
	}else{
		tQG.pause()
		tQGButton.html('')
		tQGButton.style('background-image', "url('playButtonPic.png')")
	}

}

function playTodoDeTi(){
	if(!todoDeTi.isPlaying()){
		todoDeTi.loop()
		todoDeTiButton.html('')
		todoDeTiButton.style('background-image', "url('pauseButton.png')")
	}else{
		todoDeTi.pause()
		todoDeTiButton.html('')
		todoDeTiButton.style('background-image', "url('playButtonPic.png')")
	}

}

function playElla(){
	if(!ella.isPlaying()){
		ella.loop()
		ellaButton.html('')
		ellaButton.style('background-image', "url('pauseButton.png')")
	}else{
		ella.pause()
		ellaButton.html('')
		ellaButton.style('background-image', "url('playButtonPic.png')")
	}

}

function playEssence(){
	if(!essence.isPlaying()){
		essence.loop()
		essenceButton.html('')
		essenceButton.style('background-image', "url('pauseButton.png')")
	}else{
		essence.pause()
		essenceButton.html('')
		essenceButton.style('background-image', "url('playButtonPic.png')")
	}

}

function playLast(){
	if(!last.isPlaying()){
		last.loop()
		lastButton.html('')
		lastButton.style('background-image', "url('pauseButton.png')")
	}else{
		last.pause()
		lastButton.html('')
		lastButton.style('background-image', "url('playButtonPic.png')")
	}

}

function playFreeMind(){
	if(!freeMind.isPlaying()){
		freeMind.loop()
		freeMindButton.html('')
		freeMindButton.style('background-image', "url('pauseButton.png')")
	}else{
		freeMind.pause()
		freeMindButton.html('')
		freeMindButton.style('background-image', "url('playButtonPic.png')")
	}

}

function playButter(){
	if(!butter.isPlaying()){
		butter.loop()
		butterButton.html('')
		butterButton.style('background-image', "url('pauseButton.png')")
	}else{
		butter.pause()
		butterButton.html('')
		butterButton.style('background-image', "url('playButtonPic.png')")
	}

}

function playBoom(){
	if(!boom.isPlaying()){
		boom.loop()
		boomButton.html('')
		boomButton.style('background-image', "url('pauseButton.png')")
	}else{
		boom.pause()
		boomButton.html('')
		boomButton.style('background-image', "url('playButtonPic.png')")
	}

}

function playITrulyBelieve(){
	if(!iTrulyBelieve.isPlaying()){
		iTrulyBelieve.loop()
		iTrulyBelieveButton.html('')
		iTrulyBelieveButton.style('background-image', "url('pauseButton.png')")
	}else{
		iTrulyBelieve.pause()
		iTrulyBelieveButton.html('')
		iTrulyBelieveButton.style('background-image', "url('playButtonPic.png')")
	}

}

function playShapeOfYou(){
	if(!shapeOfYou.isPlaying()){
		shapeOfYou.loop()
		shapeOfYouButton.html('')
		shapeOfYouButton.style('background-image', "url('pauseButton.png')")
	}else{
		shapeOfYou.pause()
		shapeOfYouButton.html('')
		shapeOfYouButton.style('background-image', "url('playButtonPic.png')")
	}

}

function playOneDance(){
	if(!oneDance.isPlaying()){
		oneDance.loop()
		oneDanceButton.html('')
		oneDanceButton.style('background-image', "url('pauseButton.png')")
	}else{
		oneDance.pause()
		oneDanceButton.html('')
		oneDanceButton.style('background-image', "url('playButtonPic.png')")
	}

}

function playBaby(){
	if(!baby.isPlaying()){
		baby.loop()
		babyButton.html('')
		babyButton.style('background-image', "url('pauseButton.png')")
	}else{
		baby.pause()
		babyButton.html('')
		babyButton.style('background-image', "url('playButtonPic.png')")
	}

}



function windowResize(){
	resizeCanvas(windowWidth, windowHeight)
}










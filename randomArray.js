let imgs = []

let randomButton

let otherButton

let canvas

let namesArray = ['olivia', 'bob', 'camille', 'lily']

let name = 0 

let randImage = 0


function preload(){
	for(let i = 0; i <3; i++){
		imgs[i] = loadImage(i + '.jpg')

	}

}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style('z-index', '-1')
	canvas.position(0, 0)

	randomButton = createButton('Random Image and Name')
	randomButton.mousePressed(randImageName)
	randomButton.addClass('pinkButton')

	otherButton = createButton('other')
	otherButton.position(0, 400)

	imageMode(CENTER)
	textAlign(CENTER)

}

function randImageName(){
	randImage = int(random(imgs.length))
	name = int(random(namesArray.length))
}

function draw(){
	background("white")
	image(imgs[randImage], windowWidth/2, windowHeight/2)
	textSize(20)
	fill(200, 30, 100)
	text(namesArray[name], 200, 300)


}
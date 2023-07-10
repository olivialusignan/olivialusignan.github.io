let canvas

let playButton

let modemSlider
let modemRateSlider
let bgSlider

let amplitude
let level

let modem

let selectBackground

let r = 0
let b = 0
let g = 0

let baby

function preload(){
	modem = loadSound('ModemSound.mp3')
	baby = loadImage('dancingbaby2.gif')

}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style('z-index', '-1')
	canvas.position(0,0)
	background(0)

	playButton = createButton('Play Audio')
	playButton.mousePressed(playModem)

	modemSlider = createSlider(0, 1, 1, 0.01)
	modemRateSlider = createSlider(0, 3, 1, 0.01)
	//bgSlider = createSlider(0, 255, 0, 1)

	amplitude = new p5.Amplitude()

	selectBackground = createSelect();
	selectBackground.position(10, 100)
	selectBackground.option('red')
	selectBackground.option('blue')
	selectBackground.changed(changeBackground)

}

function changeBackground(){
	if(selectBackground.value() == 'red'){
		r=255
		g=0
		b=0
	}

	if(selectBackground.value() == 'blue'){
		r=0
		g=0
		b=255
	}


}

function playModem(){
	if(!modem.isPlaying()){
		modem.loop()
		playButton.html('Pause Audio')
	}else{
		modem.pause()
		playButton.html('Play Audio')
	}

}

function draw(){
	background(r, g, b)
	background(baby)
	level = amplitude.getLevel()
	let size = map(level, 0, 0.6, 0, 900)
	ellipse(width/2, height/2, size, size)
	print(level)
	modem.setVolume(modemSlider.value())
	modem.rate(modemRateSlider.value())
	print(modemSlider.value())

}
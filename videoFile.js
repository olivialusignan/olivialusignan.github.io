
let canvas

let playButton

let playing = false 

let t1000

function preload(){
t1000 = createVideo(['T1000Reforming.mp4'])

}

function setup(){
canvas = createCanvas(windowWidth, windowHeight)

canvas.style('z-indez', '-1')

t1000.position(200, 200)

playButton = createButton('Play Video')

playButton.position(10, 35)

playButton.mousePressed(toggleVid)

print(t1000.duration())

}

function toggleVid(){
	if(playing){
		t1000.pause()
		playButton.html('Play Video')
	}else{
		t1000.loop()
		playButton.html('Pause Video')
	}
	playing = !playing
}

function draw(){

//how to display the count of the audio/video****
background(0)
print(int(t1000.time()))
fill(255)
textSize(30)
text(int(t1000.time()), 300, 100)

//if(frameCount % 180 == 0){ 
//	t1000.time(random(t1000.duration()))
//	}
}




//importing furby brush and ellipse brush
let furby
let furbyBrushBool = false
let ellipseBrushBool = false

//loading in the furby png
function preload(){
	furby= loadImage('furby.png')

}

//importing background (only shown once)
function setup(){
	createCanvas(windowWidth, windowHeight)
	background(255)
	imageMode(CENTER)

}

//when the functions are true, use specific object
function draw(){
	smooth()
	
	if(ellipseBrushBool == true){
		ellipseBrush()
	}
	if(furbyBrushBool == true){
		furbyBrush()
	}
	
}


//furby or ellipse function
function furbyBrush(){
	if(mouseIsPressed){
		image(furby, mouseX, mouseY, 40, 40)
	}
}

function ellipseBrush(){
	if(mouseIsPressed){
		ellipse(mouseX, mouseY, 40, 40)
	}
}


//which keys trigger which brushes
function keyPressed(){
	if(key == 'e'){
		ellipseBrushBool = true 
		furbyBrushBool = false

	}

	if(key == 'f'){
		ellipseBrushBool = false 
		furbyBrushBool = true

	}

	if(key =='c'){
		background(255)
		ellipseBrushBool = false;
		furbyBrushBool = false;

	}
	//saves the drawing!!
	if(key == 's'){
		save('paint.jpg')

	}


}








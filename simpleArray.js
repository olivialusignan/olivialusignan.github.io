let squareNumbers = [16, 25, 36, 49, 64, 81, 100]

function setup(){
	createCanvas(windowWidth, windowHeight)
	for(let i=0; i< squareNumbers.length; i++){
		let posX = random(100, windowWidth - 100)
		let posY = random(100, windowHeight - 100)

		ellipse(posX, posY, squareNumbers[i], squareNumbers[i])
		text(squareNumbers[i], posX, posY)

	}
	print(squareNumbers[2])

}
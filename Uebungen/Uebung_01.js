/**
 * n-c0de-r
 * Uebung 01, 11.10.22
 */

let canvasWidth;
let canvasHeight; 

/**
 *  Sets up everything properly.
 */
function setup() {
  updateCanvasSizes();
  createCanvas(canvasWidth, canvasHeight);
}

/**
 * Draws everything every frame.
 */
function draw() {
	background(64);
  // put drawing code here
}

/**
 * Redraw canvas if it has been resized!
 */
function windowResized() {
  updateCanvasSizes();
  resizeCanvas(canvasWidth, canvasHeight);
}

/**
 * Draws a seesaw.
 */
function drawSeesaw() {
	
	// TODO: Function to draw a seesaw here
}

/** 
 *  Round down to the next even number divisible by 200.
 *  That way, there is no slides at the edges and the 
 *  canvas always fits the screen without any scrolling.
 *  Also, even numbers are easier to calculate! :D
 */
function updateCanvasSizes(){
  /*
   * Assuming that the scene is 2m width, numbers easily
   * divisible by 2, work the best here. That's why 200.
   */
  canvasWidth = windowWidth - windowWidth % 200;
  canvasHeight = windowHeight - windowHeight % 200;
  console.log("width " + canvasWidth);
  console.log("height " + canvasHeight);
}
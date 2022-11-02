/**
 * template GTAT2 Game Technology & Interactive Systems 
 * Header
 * @name    Uebung_02, 
 * @author  n-c0de-r
 * @version 24.10.22
 */

// Declare draw sizes
let canvasWidth = window.innerWidth*0.99; //99% removes scroll bars
let canvasHeight = window.innerHeight*0.99;

// Declare units
let M;        // scale: pixel/meter
let xi0, yi0;	// Cartesian origin point

// Define object sizes in meters
let playGroundWidth = 1.60;
let playGroundHeight = 0.10;
let seesawAngle = 20;
let seesawDistance = 1.00;
let seesawLength = 0.25;
let seesawThickness = 0.005;
let ballRadius = 0.02;
let borderDistance = 0.60;

/**
 *  Prepare program & set up everything properly.
 */
function setup() {
  M = 0.8*canvasWidth/playGroundWidth; // Set the scale to 80% of the playground
  xi0 = canvasWidth/2;                 // Set origin point into the middle of the canvas
	yi0 = 0.8*canvasHeight;              // These don't change, so can be initialized here!
  angleMode(DEGREES);

  createCanvas(canvasWidth, canvasHeight);
}

/**
 * Run program & draw it all every frame.
 */
function draw() {
  /* administration */
  background(64);
  fill(255);
  textSize(0.05*canvasHeight);
  text("Übung 02, n-c0de-r 24.11.22", 50, 50);

  /* calculation */
	

  /* display */
  push(); // save old settings
  { // define code block, so it can be collapsed
    translate(xi0, yi0);  // move origin to cartesian middle
		scale(1, -1);	        // Flip y axis
    
    drawField(playGroundWidth, playGroundHeight);
    drawBall(0, 0, ballRadius, [253, 137, 100]); // cochonett
    drawSeesaw(seesawDistance/2, 0, seesawLength, seesawThickness, seesawAngle, true); // right
    drawSeesaw(seesawDistance/2, 0, seesawLength, seesawThickness, seesawAngle, false);// left

    drawBorders(borderDistance/2, 0, seesawThickness, true);
    drawBorders(borderDistance/2, 0, seesawThickness, false);
  }
	pop(); // restore old settings
}

/**
 * Redraw canvas if it has been resized!
 */
 function windowResized() {					//responsive design
 canvasWidth = window.innerWidth;
 canvasHeight = window.innerHeight;
 resizeCanvas(canvasWidth, canvasHeight);
}


/********************************************************
 * 
 *                   HELPER FUNCTIONS
 * 
 ********************************************************/

/********************************************************
 *                     CALCULATIONS
 ********************************************************/

/**
 * Calculates one side of a equilateral triangle.
 * @param {number} height The given height.
 * @returns Length of a side
 */
function calcTriangleSide(height) {
  return 2 * height / Math.sqrt(3.0);
}

/**
* Calculates the height of a triangle via trigonometry.
* @param {number} len     The length of the given side
* @param {number} angl    The given angle
* @param {string} target  What to calculate "o"pposide, "a"djecent, "h"ypothenuse
* @returns The calculated length looking for as a float
*/
function calcTriginometricSide(len, deg, target) {
  let result;
  let rad = deg * Math.PI/180;
  if (target === "o") {
    result = Math.sin(rad) * len;
  }
  if (target === "a") {
    result = Math.cos(rad) * len;
  }
  if (target === "h") {
    result = len/Math.sin(rad);
  }
  return result;
}

/********************************************************
 *                       DRAWINGS
 ********************************************************/

/**
 * Draws a ball at a given array in respect of it's resting point.
 * @param {number} x    X position
 * @param {number} y    Y position
 * @param {number} size The radius of the ball
 * @param {number[]|string} color Color
 */
function drawBall(x, y, size, color) {
  fill(color);
  ellipseMode(RADIUS);
  ellipse(x*M, (y+size)*M, size*M, size*M);
}

/**
 * Draws the red boders the boule shouldn't cross.
 * @param {*} x       X position from center
 * @param {*} y       Y position from center
 * @param {*} height  Height of the bar
 * @param {*} flip    If it is flipped
 */
function drawBorders(x, y, height ,flip) {
  let sign = 1; // right
  if (!flip) {// left
    sign = -1;
  }
  
  fill("red");
  rectMode(RADIUS);

  rect(sign*x*M,(y-height)*M, ballRadius*2*M, height*M);
}

/**
 * Draws a ground rectangle of a given size at the central position
 * @param {number} width 
 * @param {number} height 
 */
 function drawField(width, height) {
  fill("white");
  ellipse(width, height, 5,5);
  fill("orange");
  rectMode(CENTER);
  rect(0, -height/2*M, width*M, height*M);
}

/**
* Draws a seesaw.
* @param {number} x      Horizontal base position where to draw it
* @param {number} y      Vertical bottom position it's anchored to
* @param {number} len    Length of the seesaw
* @param {number} thick  Thickness of the seesaw
* @param {number} deg    Degree the seesaw is positioned
* @param {boolean} flip  Draws differently if it is flipped
*/
function drawSeesaw(x, y, len, thick, deg, flip) {
  fill(74, 120, 198);
  // Calculate height and sides from angle and length
  let triangleHeight = calcTriginometricSide(len/2, deg, "o");
  let triangleSide = calcTriangleSide(triangleHeight);
  /**
   * @todo  find out how rotation works correctly
   */

  let sign = 1; // right
  if (!flip) {// left
    sign = -1;
  }
  // Direction changed, update x
  x = x * sign;
  
  // base triangle
  triangle((x-triangleSide/2)*M, y, x*M, y+triangleHeight*M, (x+triangleSide/2)*M, y);

  //next highest point, tip of the triangle. Update
  y = y+triangleHeight
  // Seesaw
  rectMode(RADIUS);
  rect(x*M,(y+thick)*M, len/2*M, thick*M);

  //next highest point, base of the seesaw. Update
  y = y+thick*2;
  // next relevant sideway point: side edges. Update
  x = x+sign*len/2;
  
  // draw boule
  fill("white");
  ellipseMode(RADIUS);
  ellipse((x-sign*ballRadius)*M,(y+ballRadius)*M, ballRadius*M, ballRadius*M);

  
  // next relevant sideway point: Ball edge. Update
  x = x-sign*ballRadius*2;

  fill(74, 120, 198);

  // small triangle
  triangle((x-sign*ballRadius/2)*M, y*M, x*M, (y+ballRadius)*M, (x+sign*ballRadius/2)*M, y*M);
}
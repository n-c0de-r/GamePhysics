/**
 * Header
 * @name    Uebung_1, 
 * @author  n-c0de-r
 * @version 11.10.22
 * @version 16.10.22 (helper functions)
 * @version 17.10.22 (final draw)
 */

// Declare draw sizes
let canvasWidth, canvasHeight, horizontalMid
// Declare units
let m, cm;
// Declare object sizes
let seesawLength, seesawAngle, ballRadius;

/**
 *  Sets up everything properly.
 */
function setup() {
  angleMode(DEGREES);
  seesawLength = 25;
  seesawAngle = 20;
  ballRadius = 2;
  updateCanvasSizes();
  createCanvas(canvasWidth, canvasHeight);
}

/**
 * Draws everything every frame.
 */
function draw() {
  background(64);
  fill("orange");
  rect(0, canvasHeight*2/3, canvasWidth, canvasHeight/3);
  drawSeesaw(horizontalMid-m/2, canvasHeight*2/3, seesawLength, seesawAngle, false);
  drawSeesaw(horizontalMid+m/2, canvasHeight*2/3, seesawLength, seesawAngle, true);
  fill(253, 137, 100);
  circle(horizontalMid, canvasHeight*2/3-ballRadius*cm, 2*ballRadius*cm);
  fill("red");
  rect(horizontalMid-0.3*m-2*cm, canvasHeight*2/3, 4*cm, cm);
  rect(horizontalMid+0.3*m-2*cm, canvasHeight*2/3, 4*cm, cm);
}

/**
 * Redraw canvas if it has been resized!
 */
function windowResized() {
  updateCanvasSizes();
  resizeCanvas(canvasWidth, canvasHeight);
}

// HELPER FUNCTIONS

/**
 * Draws a seesaw.
 * @param {number} x      Horizontal base position where to draw it
 * @param {number} y      Vertical bottom position it's anchored to
 * @param {number} len    Length of the seesaw
 * @param {number} deg    Degree the seesaw is positioned
 * @param {boolean} flip  Draws differently if it is flipped
 */
function drawSeesaw(x, y, len, deg, flip) {
  fill(74, 120, 198);
	let triangleHeight = calcTriginometricSide(len/2, deg, "o");
  let triangleSide = calcTriangleSide(triangleHeight);
  triangle(x-triangleSide/2*cm, y, x, y-triangleHeight*cm, x+triangleSide/2*cm, y);
  rect(x-len/2*cm, y-cm-triangleHeight*cm, len*cm, cm);

  /**
   * @todo  find out how rotation works correctly
   */
  let sign = 1;
  
  if (!flip) {// left
    sign = -1;
  }

  triangle(x+sign*(len/2-4)*cm, y-cm-triangleHeight*cm,
  x+sign*(len/2-6)*cm, y-3*cm-triangleHeight*cm,
  x+sign*(len/2-8)*cm, y-cm-triangleHeight*cm);
  fill("white");
  circle(x+sign*(len/2-ballRadius)*cm, y-cm-triangleHeight-3*ballRadius*cm, 2*ballRadius*cm);
}

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

/** 
 *  Updates relevant numbers for drawing.
 */
function updateCanvasSizes(){
  /*
   * Assuming that the scene is 2m (200cm) wide, so
   * reduce the dimensions to their next multiple of 200.
   */
  canvasWidth = windowWidth - windowWidth % 200;
  canvasHeight = windowHeight - windowHeight % 200;
  horizontalMid = canvasWidth / 2;

  // Calculate virtual m & cm.
  m = canvasWidth / 2;
  cm = m / 100;
}
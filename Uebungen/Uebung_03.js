/**
 * template GTAT2 Game Technology & Interactive Systems 
 * Header
 * @name    Uebung_03, 
 * @author  n-c0de-r
 * @version 25.10.22
 */

/**
 *  Prepare program & set up everything properly.
 */
function setup() {
  angleMode(DEGREES);

  createCanvas(canvasWidth, canvasHeight);
}

/**
 * Run program & draw it all every frame.
 */
function draw() {
  /* administration */
  M = 0.8*canvasWidth/playGroundWidth; // Set the scale to 80% of the playground
  xi0 = canvasWidth/2;                 // Set origin point into the middle of the canvas
  yi0 = 0.8*canvasHeight;              // These don't change, so can be initialized here!
  
  background(64);
  fill(255);
  textSize(Math.min(0.05*canvasHeight, 0.05*canvasWidth));
  text("Übung 03, n-c0de-r 25.11.22", 50, 50);

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
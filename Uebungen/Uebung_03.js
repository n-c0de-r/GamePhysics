/**
 * template GTAT2 Game Technology & Interactive Systems 
 * Header
 * @name    Uebung_03, 
 * @author  n-c0de-r
 * @version 30.10.22
 */

/**
 *  Prepare program & set up everything properly.
 */
function setup() {
  angleMode(DEGREES);
  updatePositions();
  createCanvas(canvasWidth, canvasHeight);
}

/**
 * Run program & draw it all every frame.
 */
function draw() {
  /* administration */

  M = 0.8*canvasWidth/playGround.width; // Set the scale to 80% of the playground
  xi0 = canvasWidth/2;                 // Set origin point into the middle of the canvas
  yi0 = 0.8*canvasHeight;              // Check and repeat every frame. Just in case.
  
  background(64);
  drawText(infoText);

  drawToggleButton(gameButton);

  /* calculation */
  if(mouseIsPressed && calcMouseIntersection(leftCircle)) {
    
    push();
    {
      noFill();
      stroke("red");
      ellipse(mouseX, mouseY, 20);
      seesawLeft.angle = PI*-mouseY;
    }
    pop();
	}

  if(mouseIsPressed && calcMouseIntersection(rightCircle)) {
    
    push();
    {
      noFill();
      stroke("red");
      ellipse(mouseX, mouseY, 20);
      seesawRight.angle = PI*-mouseY;
    }
    pop();
	}

  /* display */
  push(); // save old settings
  { // define code block, so it can be collapsed
    translate(xi0, yi0);  // move origin to cartesian middle
	  scale(1, -1);	        // Flip y axis
    
    drawField(playGround);
    drawBall(cochonnet); // cochonett

    drawBorder(borderRight);
    drawBorder(borderLeft);

    drawSeesaw(seesawRight);
    drawSeesaw(seesawLeft);
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
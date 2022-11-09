/**
 * GTAT2 Game Technology & Interactive Systems Header
 * @name    Uebung_04, 
 * @author  n-c0de-r
 * @version 09.11.22
 */

/**
 *  Prepare program & set up everything properly.
 */
function setup() {
  initWorld(); // in controls
  updateSizes(); // in calcs
}

/**
 * Run program & draw it all every frame.
 */
function draw() {
  /* administration */
  background(64);
  drawGUI(); // in controls

  /* calculation */
  /**
   * @todo refine all the click, drag and move interactions
   */
   seesawRight.control.intersectsMouse();
   seesawLeft.control.intersectsMouse();

  push();
    {
      noFill();
      stroke("black");
      ellipse(mouseX, mouseY, 5);
    }
  pop();

  /* display */
  push(); // save old settings
    translate(xi0, yi0);  // move origin to cartesian middle
	  scale(1, -1);	        // Flip y axis

    drawObjects(); // in controls
	pop(); // restore old settings
}

function windowResized() {
  updateSizes(); // in calcs
  resizeCanvas(canvasWidth, canvasHeight);
}
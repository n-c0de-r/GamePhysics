/**
 * GTAT2 Game Technology & Interactive Systems Header
 * @name    Uebung_03, 
 * @author  n-c0de-r
 * @version 02.11.22
 */

/**
 *  Prepare program & set up everything properly.
 */
function setup() {
  initWorld();
  updateSizes();
}

/**
 * Run program & draw it all every frame.
 */
function draw() {
  /* administration */
  background(64);
  drawGUI();

  /* calculation */
  /**
   * @todo redo all the click, drag and move interactions
   */
  calcMouseIntersection(circleLeft);

  /* display */
  push(); // save old settings
    translate(xi0, yi0);  // move origin to cartesian middle
	  scale(1, -1);	        // Flip y axis

    drawObjects();
    drawOverlays();
	pop(); // restore old settings
}

function windowResized() {
  updateSizes();
  resizeCanvas(canvasWidth, canvasHeight);
}
/********************************************************
 *                   DRAWING FUNCTIONS
 * @name    Uebung_03, 
 * @author  n-c0de-r
 * @version 25.10.22
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
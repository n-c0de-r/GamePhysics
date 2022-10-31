/********************************************************
 *                   DRAWING FUNCTIONS
 * @name    Uebung_03, 
 * @author  n-c0de-r
 * @version 30.10.22
 ********************************************************/

/**
 * Draws any ball object.
 * @param {object} ball Ball to draw
 */
 function drawBall(ball) {
    fill(ball.color);
    ellipseMode(RADIUS);
    ellipse(ball.x*M, (ball.y+ball.r)*M, ball.r*M, ball.r*M);
  }
  
  /**
   * Draws the red boders the boule shouldn't cross.
   * @param {object} x   Border
   */
  function drawBorder(border) {
    
    fill(border.color);
    rectMode(RADIUS);
  
    rect(border.x*M, border.y*M, border.w*M, border.h*M);
  }
  
  /**
   * Draws a ground rectangle of a given size at the central position
   * @param {object} field  The field to draw
   */
   function drawField(field) {
    fill(field.color);
    rectMode(CENTER);
    rect(0, -field.height/2*M, field.width*M, field.height*M);
    fill("white");
    ellipseMode(RADIUS);
    ellipse(0, 0, 5, 5);
  }
  
  /**
  * Draws a seesaw.
  * @param {object} seesaw  The seesaw to draw
  */
  function drawSeesaw(seesaw) {
    //boule.x = (boule.x+seesaw.length/2)* seesaw.flip
    fill(74, 120, 198);
    
    push(); 
    { // base triangle
      translate((seesaw.x)*M, seesaw.y*M); // Direction changed, update x
      triangle((-seesaw.base.width/2)*M, 0, 0, seesaw.base.height*M, (seesaw.base.width/2)*M, 0);

      push();
      { //next highest point, tip of the triangle.
		    translate(0, seesaw.base.height*M);
        rotate(seesaw.flip*seesaw.angle);
        
        rectMode(RADIUS); // Seesaw
        rect(0, (seesaw.thick)*M, seesaw.length/2*M, seesaw.thick*M);

        push();
        { //next highest point: base of the seesaw; relevant sideway point: side edges
           translate((seesaw.flip*seesaw.length/2)*M, seesaw.thick*2*M);

          push();
          { // next relevant sideway point: Ball edge.
            translate((-seesaw.flip*ballRadius*2)*M, 0);
            fill(74, 120, 198); // small triangle
            triangle((-seesaw.flip*ballRadius/2)*M, 0, 0, (ballRadius)*M, (seesaw.flip*ballRadius/2)*M, 0);
          }
          pop();

          push();
          { // Click circles
            if (seesaw.flip === 1) {
              drawBall(bouleRight);
              noFill();
              rightCircle.kX = (seesaw.x+seesaw.length/2) * seesaw.flip;
              rightCircle.kY = seesaw.base.height;
              rightCircle.pX = convKXtoPX(rightCircle.kX*M);
              rightCircle.pY = convKYtoPY(rightCircle.kY*M);
              rightCircle.radius = 10;
              stroke("red");
              ellipse(0, -seesaw.thick*M, rightCircle.radius*2);
              
              stroke("white");
              ellipse(rightCircle.pX, rightCircle.pY, rightCircle.radius*2);
            } else {
              drawBall(bouleLeft);
              noFill();
              leftCircle.kX = (seesaw.x+seesaw.length/2) * seesaw.flip;
              leftCircle.kY = seesaw.base.height;
              leftCircle.pX = convKXtoPX(leftCircle.kX*M);
              leftCircle.pY = convKYtoPY(leftCircle.kY*M);
              leftCircle.radius = 10;
              stroke("blue");
              ellipse(0, -seesaw.thick*M, leftCircle.radius*2);
            }
          }
          pop();
        }
        pop();
      }
      pop();
    }
    pop();
  }

  /**
   * Draws a toggle button with all its properties.
   * @param {object}  button  Button to draw
   */
   function drawToggleButton(button) {
    let dim = [button.x, button.y, button.w, button.h];
    let buttonModes = button.options.split("/");

    rectMode(CENTER);
    fill(button.color);
    rect(...dim, 10);

    fill(button.textColor);
    textSize(Math.min(0.05*canvasHeight, 0.05*canvasWidth));

    let t = buttonModes[0];
    if (button.pressed) {
      t = buttonModes[1];
    }
    textAlign(CENTER, CENTER);
    text(t, ...dim);
  }

  function drawText(input) {
    rectMode(CORNER);
    fill(input.color);
    textSize(Math.min(input.h, input.w));
    text(input.text, input.x, input.y);
  }
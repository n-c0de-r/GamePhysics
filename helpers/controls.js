/********************************************************
 *                 CONTROL FUNCTIONS
 * @name    Uebung_04, 
 * @author  n-c0de-r
 * @version 09.11.22
 ********************************************************/

/**
 * Sets up all game relevant variables
 */
function initWorld() {
    t = 0; 
    dt = 0;
    running = false;

    angleMode(DEGREES);
    canvasWidth = window.innerWidth*0.99; //99% removes scroll bars
    canvasHeight = window.innerHeight*0.99;
    percentWidth = canvasWidth / 100.0;
    percentHeight = canvasHeight / 100.0;
    // Set the scale to 80% of the playground
    M = 0.8*canvasWidth/playground.width;
    // Set origin point into the middle of the canvas
    xi0 = canvasWidth/2;                 
    yi0 = 0.8*canvasHeight;

    createCanvas(canvasWidth, canvasHeight);
}

/**
 * Draws all game objects
 */
function drawObjects() {
    playground.draw();
    cochonnet.draw();
    borderRight.draw();
    borderLeft.draw();
    seesawRight.draw();
    seesawLeft.draw();
    bouleRight.draw();
    bouleLeft.draw();
}

/**
 * Draws GUI elements
 */
function drawGUI() {
    gameButton.draw();
    // debugButton.draw();
    infoText.draw();
}

// Overrides from built-in functions
function mouseMoved() {

}

function  mouseDragged() {
    mDragged = true;
}

function  mousePressed() {
    
}

function  mouseReleased() {
}

function  mouseClicked() {
    if(calcButtonIntersection(gameButton)) {
        running = gameButton.toggle();
    }
}
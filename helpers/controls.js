/********************************************************
 *                 CONTROL FUNCTIONS
 * @name    Uebung_03, 
 * @author  n-c0de-r
 * @version 30.10.22
 ********************************************************/

// Overrides from built-in functions
function mouseMoved() {

}

function  mouseDragged() {

}

function  mousePressed() {
    
}

function  mouseReleased() {
    
}

function  mouseClicked() {
    if (calcButtonIntersection(gameButton)) {
        gameRunning = !gameRunning;
        gameButton.pressed = gameRunning;
    }
}
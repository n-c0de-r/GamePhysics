/********************************************************
 *                        OBJECTS
 * @name    Uebung_03, 
 * @author  n-c0de-r
 * @version 02.11.22
 ********************************************************/

// Game objects
const playground    = new Playground(1.60, 0.10, "green");
const cochonnet     = new Ball(0, 0, ballRadius, 0.0025, [253, 137, 100]);
const seesawRight   = new Seesaw( seesawDistance/2, seesawWidth, seesawHeight, seesawLength, seesawThickness, [74, 120, 198]);
const seesawLeft    = new Seesaw(-seesawDistance/2, seesawWidth, seesawHeight, seesawLength, seesawThickness, [74, 120, 198]);
const borderRight   = new Border( borderDistance/2, -0.01, ballRadius*2, 0.01, "red");
const borderLeft    = new Border(-borderDistance/2, -0.01, ballRadius*2, 0.01, "red");
const bouleRight    = new Ball( ballX, seesawHeight+seesawThickness*2, ballRadius, 0.005, "white");
const bouleLeft     = new Ball(-ballX, seesawHeight+seesawThickness*2, ballRadius, 0.005, "white");

// GUI objects
const gameButton = new ToggleButton(4, 4, "green/red", "Start/Reset");
const infoText = new InfoText(4, "white", exercise + ", " + myName + ", " + date);
const circleRight = new OverlayCircle(seesawDistance/2+seesawLength/2, seesawHeight+seesawThickness, "red");
const circleLeft = new OverlayCircle( -seesawDistance/2-seesawLength/2, seesawHeight+seesawThickness, "blue");
/********************************************************
 *                        OBJECTS
 * @name    Uebung_04, 
 * @author  n-c0de-r
 * @version 09.11.22
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
// Bind boules to the respective seesaw in the beginning.
bouleLeft.seesaw  = seesawLeft;
bouleRight.seesaw = seesawRight;

// GUI objects
const gameButton = new ToggleButton(4, 4, "green/red", "Start/Reset");
// const debugButton = new ToggleButton(4, 16, "green/red", "Debug/Debug");
const infoText = new InfoText(4, "white", exercise + ", " + myName + ", " + date);
// Bind Control Overlay to seesaw as property, and vice versa as a parameter 
seesawRight.control = new OverlayCircle( seesawDistance/2+seesawLength/2, seesawHeight+seesawThickness, "red", seesawRight);
seesawLeft.control  = new OverlayCircle(-seesawDistance/2-seesawLength/2, seesawHeight+seesawThickness, "blue", seesawLeft);
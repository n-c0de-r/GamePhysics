/********************************************************
 *                 CONSTANTS & VARIABLES
 * @name    Uebung_03, 
 * @author  n-c0de-r
 * @version 25.10.22
 ********************************************************/

// Declare draw sizes
let canvasWidth = window.innerWidth*0.99; //99% removes scroll bars
let canvasHeight = window.innerHeight*0.99;

// Declare units
let M;        // scale: pixel/meter
let xi0, yi0;	// Cartesian origin point

// Define object sizes in meters
const playGroundWidth = 1.60;
const playGroundHeight = 0.10;
const seesawAngle = 20;
const seesawDistance = 1.00;
const seesawLength = 0.25;
const seesawThickness = 0.005;
const ballRadius = 0.02;
const borderDistance = 0.60;
/********************************************************
 *                 CONSTANTS & VARIABLES
 * @name    Uebung_04,
 * @author  n-c0de-r
 * @version 09.11.22
 ********************************************************/

// Header variables
const myName = "Rustic";
const exercise = "Übung 04";
const date = currentDate();

// Declare constants (yes, no CAPS here...)
const fps = 60;     //frames per second
const g = -9.81;    //gravity
// 1: normal; 1<: time lapse; 1>: slow motion
const timeScale = 1;

// Declare sizes in meter
const seesawDistance = 1.00;
const seesawThickness = 0.005
const seesawLength = 0.25;
const seesawHeight = calcTriginometricSide(seesawLength/2, 20, "o");
const seesawWidth = calcTriangleSide(seesawHeight);
const borderDistance = 0.60;
const ballRadius = 0.02;
const ballX = seesawDistance/2+seesawLength/2-ballRadius;

// Declare draw sizes
let canvasWidth, canvasHeight, percentWidth, percentHeight;

// Declare state variables
let running, debugging, mDragged, mReleased, mPressed, mClicked;

// Declare calculation units
let M, xi0, yi0;// scale factor and Cartesian origin point
let t, dt, t_, dt_; // needed for time descrete calculations
/********************************************************
 *                 CONSTANTS & VARIABLES
 * @name    Uebung_03, 
 * @author  n-c0de-r
 * @version 02.11.22
 ********************************************************/

// Declare constants and distances
const myName = "n-c0de-r";
const exercise = "Übung 04";
const date = currentDate();

const seesawDistance = 1.00;
const seesawThickness = 0.005
const seesawLength = 0.25;
const seesawHeight = calcTriginometricSide(seesawLength/2, 20, "o");
const seesawWidth = calcTriangleSide(seesawHeight);
const borderDistance = 0.60;
const ballRadius = 0.02;
const ballX = seesawDistance/2+seesawLength/2-ballRadius;

// Declare draw sizes & units
let running, canvasWidth, canvasHeight, percentWidth, percentHeight, M, xi, yi; // Cartesian origin point
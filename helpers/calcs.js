/********************************************************
 *                 CALCULATION FUNCTIONS
 * @name    Uebung_04, 
 * @author  n-c0de-r
 * @version 09.11.22
 ********************************************************/

/**
 * Converts degrees to radians
 * @param {number} deg 
 * @returns float number of radians
 */
 function deg2rad(deg) {
  return deg * (Math.PI/180);
}

/**
 * Calculates one side of a equilateral triangle.
 * @param {number} height The given height.
 * @returns Length of a side
 */
function calcTriangleSide(height) {
  return 2 * height / Math.sqrt(3.0);
}

/**
* Calculates the height of a triangle via trigonometry.
* @param {number} len     The length of the given side
* @param {number} deg     The given angle
* @param {string} target  "o"pposite, "a"djecent, "h"ypothenuse
* @returns The calculated length as a float
*/
function calcTriginometricSide(len, deg, target) {
  let result;
  let rad = deg2rad(deg);
  if (target === "o") {
    result = Math.sin(rad) * len;
  }
  if (target === "a") {
    result = Math.cos(rad) * len;
  }
  if (target === "h") {
    result = len/Math.sin(rad);
  }
  return result;
}

// Conversions from cartesian to pixels
function convKXtoPX(x) {
  return x + xi0;
}
function convKYtoPY(y) {
  return yi0 - y;
}

// Conversions from pixels to cartesian
function convPXtoKX(x) {
  return x - xi0;
}
function convPYtoKY(y) {
  return yi0 - y;
}

/**
 * Updates all playfield sizes and UI elements relying on pixels
 */
function updateSizes() {
  canvasWidth = window.innerWidth*0.99; //99% removes scroll bars
  canvasHeight = window.innerHeight*0.99;
  percentWidth = canvasWidth / 100.0;
  percentHeight = canvasHeight / 100.0;

  M = 0.8*canvasWidth/playground.width; // Set the scale to 80% of the playground
  xi0 = canvasWidth/2;                 // Set origin point into the middle of the canvas
  yi0 = 0.8*canvasHeight;
}

/**
 * Gets the current date as a string.
 * @returns String of the current date
 */
function currentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = dd + '.' + mm + '.' + yyyy;
  return today;
}
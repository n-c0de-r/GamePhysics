/********************************************************
 *                 CALCULATION FUNCTIONS
 * @name    Uebung_03, 
 * @author  n-c0de-r
 * @version 30.10.22
 ********************************************************/

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
* @param {number} angl    The given angle
* @param {string} target  What to calculate "o"pposide, "a"djecent, "h"ypothenuse
* @returns The calculated length looking for as a float
*/
function calcTriginometricSide(len, deg, target) {
  let result;
  let rad = deg * Math.PI/180;
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

/**
 * Checks if the current mouse position is inside the given button.
 * @param {object}  btn The button to check.
 * @returns {boolean} Value when inside the button.
 */
function calcButtonIntersection(btn) {
  if ((mouseX > btn.x-btn.w/2 && mouseX < btn.x+btn.w/2) &&
        mouseY > btn.y-btn.h/2 && mouseY < btn.y+btn.h/2) {
    return true;
  }
  return false;
}

function calcMouseIntersection(circle) {
  let d = Math.sqrt(Math.pow((mouseX - circle.pX), 2) + Math.pow((mouseY - circle.pY), 2));
  d = Math.floor(d) + 5;

  if (d < circle.radius*2) {
    return true;
  }
  return false;
}

function deg2rad(deg) {
  return deg * (PI/180);
}

function convKXtoPX(x) {
  return x + xi0;
}

function convKYtoPY(y) {
  return yi0 - y;
}

function convPXtoKX(x) {
  return x - xi0;
}

function convPYtoKY(y) {
  return yi0 - y;
}

function updateSeesaw(seesaw) {
  // Calculate height and sides from angle and length
  seesaw.base.height = calcTriginometricSide(seesaw.length/2, 20, "o");
  seesaw.base.width = calcTriangleSide(seesaw.base.height);
  seesaw.x = seesaw.x * seesaw.flip;
  seesaw.base.tipX = seesaw.x;
  seesaw.base.tipY = seesaw.base.height;
}

function updatePositions() {
  updateSeesaw(seesawLeft);
  updateSeesaw(seesawRight);
}

function currentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + '.' + mm + '.' + yyyy;
  return today;
}
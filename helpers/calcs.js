/********************************************************
 *                 CALCULATION FUNCTIONS
 * @name    Uebung_03, 
 * @author  n-c0de-r
 * @version 25.10.22
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
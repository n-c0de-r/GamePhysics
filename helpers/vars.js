/********************************************************
 *                 CONSTANTS & VARIABLES
 * @name    Uebung_03, 
 * @author  n-c0de-r
 * @version 30.10.22
 ********************************************************/

let gameRunning = false;

// Declare draw sizes
let canvasWidth = window.innerWidth*0.99; //99% removes scroll bars
let canvasHeight = window.innerHeight*0.99;

// Declare units
let M;        // scale: pixel/meter
let xi0, yi0;	// Cartesian origin point

// Declare distances
const seesawDistance = 1.00;
const borderDistance = 0.60;
const ballRadius = 0.02;

// Define objects, sizes in meters
const playGround = {
    width: 1.60,
    height: 0.10,
    color: "green"
}

const cochonnet  = {
    x: 0,
    y: 0,
    r: ballRadius,
    g: 2.5, //gramm
    color: [253, 137, 100]
}

const seesawRight = {
    x: seesawDistance/2,
    y: 0,
    length: 0.25,
    thick: 0.005,
    angle: 0,
    flip: 1, // right
    color: [74, 120, 198],
    base: {
        tipX: 0,
        tipY: 0,
        hight: 0,
        width: 0,
    }
}

const seesawLeft = {
    x: seesawDistance/2,
    y: 0,
    length: 0.25,
    thick: 0.005,
    angle: 0,
    flip: -1, // left
    color: [74, 120, 198],
    base: {
        tipX: 0,
        tipY: 0,
        hight: 0,
        width: 0,
    }
}

const bouleRight = {
    x: -ballRadius,
    y: 0,
    r: ballRadius,
    g: 5, //gramm
    color: "white"
}

const bouleLeft = {
    x: ballRadius,
    y: 0,
    r: ballRadius,
    g: 5, //gramm
    color: "white"
}

const borderRight = {
    x: borderDistance/2,
    y: -0.01,
    h: 0.01,
    w: ballRadius*2,
    color: "red"
}

const borderLeft = {
    x: -1 * borderDistance/2,
    y: -0.01,
    h: 0.01,
    w: ballRadius*2,
    color: "red"
}

// UI elements
const infoText = {
    x: 50,
    y: 50,
    w: 0.05*canvasWidth,
    h: 0.05*canvasHeight,
    color: 255,
    text: "Übung 03, Rustic " + currentDate()
}

const gameButton = {
    x: canvasWidth-50*2,
    y: canvasHeight-50,
    color: "red",
    textColor: "white",
    pressed: false,
    options: "Start/Reset",
    w: 50*3,
    h: 50
}

const leftCircle = {
    kX: 0,
    kY: 0,
    pX: 0,
    pY: 0,
    radius: 10
}

const rightCircle = {
    kX: 0,
    kY: 0,
    pX: 0,
    pY: 0,
    radius: 10
}
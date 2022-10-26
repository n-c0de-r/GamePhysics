/* template GTAT2 Game Technology & Interactive Systems */
/* Autor:  V. Naumburger/
/* Übung Nr. Beispiel Mausinteraktion */
/* Datum: 2022-10-16 */

/* declarations */ 
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

var M;																			// Maßstab [pixel/meter]
var xi0, yi0;																// Koordinatenursprung intern

var playGroundWidth = 1.6;									// Spielfeldgröße [m]
var playGroundHeight = 0.2;									// Höhe des Spielfeldbodens [m]

var rectX = -0.5;														// Testrechteck, alle Maße in [m]
var rectY = 0.4;
var rectWidth = 0.2;
var rectHeight = 0.3;

/* prepare program */
function setup() {								
  createCanvas(windowWidth, windowHeight);
	
}

/* run program */
function draw() {									
	background(255);
	M = 0.9*windowWidth/playGroundWidth;			// Maßstab bezügl. 90% Spielfeldgröße
	xi0 = windowWidth/2;											// Koordinatenursprung festlegen
	yi0 = 0.9*windowHeight;
	
		/* administration */
		fill(0);
		textSize(0.02*windowWidth);
		text("Programmbeispiel Koordinatensystem", 200, 50);
		
		/* calculation */
		
	
		/* display */
		push();																	// neues Koord.system kreieren
		translate(xi0, yi0);										// Koordinatenursprung festlegen
		scale(1, -1);														// y-Achse spiegeln
			fill(255, 0, 0);
			rectMode(CENTER);
			rect(0, 0.5*playGroundHeight*M, playGroundWidth*M, playGroundHeight*M);
			ellipseMode(CENTER);
			fill(0);
			ellipse(0, 0, 5);
			//text("Beispiel", 0, 0.6*M);						// fehlerhafte Darstellung: Text gespiegelt
		pop();

		/* alternative Positionierung */
		fill(255, 255, 0);
		rectMode(CORNER);
		rect(kXi(rectX*M), kYi(rectY*M), rectWidth*M, rectHeight*M);
		fill(0);
		//text("Text",kXi((rectX + 0.5*rectWidth)*M), kYi((rectY - 0.5*rectHeight)*M));
		ellipse(kXi(rectX*M), kYi(rectY*M), 4);   // Position des Rechtecks

		if(mPressed)
			{
				push();																// Formatierung merken
					noFill();
					stroke(0, 0, 255);
					ellipse(mouseX, mouseY, 20);
				pop();
			}
		
		push();	
			translate(xi0, yi0);										// Koordinatenursprung festlegen
			text("interne Mauskoordinaten", 0.2*M, -0.54*M);
			text("x = "+mouseX+" pix  y = "+mouseY+" pix", 0.2*M, -0.5*M);
			text("kartesische Mauskoordinaten", 0.2*M, -0.34*M);
			text("x = "+iXk(mouseX)/M+" m", 0.2*M, -0.3*M);
			text("y = "+iYk(mouseY)/M+" m", 0.2*M, -0.26*M);
		pop();
	}

/* isr */
function windowResized() {						/* responsive design */
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  resizeCanvas(windowWidth, windowHeight);
}

/********************************************************
 *                        CLASSES
 * @name    Uebung_03, 
 * @author  n-c0de-r
 * @version 02.11.22
 ********************************************************/

// Game Objects
class Playground {
    /**
     * A Playground of certain size and color
     * @param {number} width 
     * @param {number} height 
     * @param {string | number[]} color 
     */
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
        this
    }

    draw() {
        push();
            rectMode(CENTER);
            fill(this.color);
            rect(0, -this.height/2*M, this.width*M, this.height*M);
            ellipseMode(RADIUS);
            fill("white");
            ellipse(0, 0, 5, 5);
        pop();
    }
}

class Border {
    /**
     * Borders the boules are not allowed to cross
     * @param {number} x
     * @param {number} y
     * @param {number} width 
     * @param {number} height 
     * @param {string | number[]} color  
     */
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        push();
            rectMode(RADIUS);
            fill(this.color);
            rect(this.x*M, this.y*M, this.width*M, this.height*M);
        pop();
    }
}

class Ball {
    /**
     * A ball of a certain size, mass and color
     * @param {number} x
     * @param {number} y
     * @param {number} radius 
     * @param {number} mass 
     * @param {string | number[]} color 
     */
    constructor(x, y, radius, mass, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.mass = mass;
        this.color = color;
    }

    draw() {
        push();
            rotate(0);
            
            ellipseMode(RADIUS);
            fill(this.color);
            ellipse(this.x*M, (this.y+this.radius)*M, this.radius*M, this.radius*M);
        pop();
    }
}

class Seesaw {
    /**
     * Seesaw that tosses boules
     * @param {number} x
     * @param {number} length
     * @param {string | number[]} color  
     */
    constructor(x, width, height, length, thickness, color) {
        this.x = x;
        this.length = length;
        this.thickness = thickness;
        this.angle = 0;
        this.color = color;
        this.midX = x;
        this.midY = height;
        this.base = width;
    }

    draw() {
        fill(this.color);
        triangle((this.x-this.base/2)*M, 0, this.x*M, this.midY*M, (this.x+this.base/2)*M, 0);
        push();
        {
            translate(this.x*M, this.midY*M);
            rotate(this.angle);
            rectMode(RADIUS); // Seesaw
            rect(0, (this.thickness)*M, this.length/2*M, this.thickness*M);
        }
        pop();
    }

    rotate(angle) {
        this.angle = angle;
    }
}

// GUI Objects
class InfoText {
    constructor(size, color, text) {
        this.size = size;
        this.update();
        this.color = color;
        this.text = text;
    }

    draw() {
        push();
            rectMode(CORNER);
            fill(this.color);
            textSize(Math.min(this.height, this.width));
            text(this.text, ...this.dim);
        pop();
    }

    update() {
        this.x = percentWidth;
        this.y = percentHeight;
        this.width = this.size*10*percentWidth;
        this.height = this.size*percentHeight;
        this.dim = [this.x, this.y, this.width, this.height];
    }
}

class OverlayCircle {
    /**
    * A visualization circle of a certain size and color
    * @param {number} x
    * @param {number} y
    * @param {string | number[]} color  
    */
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.color = color;
    }

    draw() {
        push();
            noFill();
            stroke(this.color);
            ellipse(this.x*M, this.y*M, this.radius*2);
        pop();
    }
}

class ToggleButton {
    /**
     * A Toggle button switching colors and texts.
     * @param {number} size
     * @param {number} offX
     * @param {string} colors
     * @param {string} texts
     */
    constructor(size, offX, colors, texts) {
        this.size = size;
        this.offX = offX;
        this.update();
        this.pressed = running;
        this.colors = colors.split("/");
        this.textColor = "white";
        this.texts = texts.split("/");;
    }

    draw() {
        push();
            rectMode(CENTER);
            fill(this.colors[this.pressed | 0]);
            rect(...this.dim, 10);

            fill(this.textColor);
            textSize(Math.min(this.width, this.height)); // todo: fix size
            textAlign(CENTER, CENTER);
            text(this.texts[this.pressed | 0], ...this.dim);
        pop();
    }
    
    update() {
        this.x = canvasWidth-(this.offX+1)*percentWidth;
        this.y = canvasHeight-(this.size)*percentHeight;
        this.width = this.size*2*percentWidth;
        this.height = this.size*percentHeight;
        this.dim = [this.x, this.y, this.width, this.height];
    }

    toggle() {
        running = !running;
        this.pressed = running;
    }
}
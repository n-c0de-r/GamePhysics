/********************************************************
 *                        CLASSES
 * @name    Uebung_04, 
 * @author  n-c0de-r
 * @version 09.11.22
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
        this.seesaw = null;
        this.direction = x / Math.abs(x);
    }

    draw() {
        push();
            ellipseMode(RADIUS);
            fill(this.color);

            if (this.seesaw != null) {
                this.rotate(this.seesaw.angle);
            } else {
                ellipse(this.x*M, (this.y+this.radius)*M, this.radius*M, this.radius*M);
            }
            
        pop();
    }

    rotate(angle) {
        push();
            translate(this.seesaw.midX*M, this.seesaw.midY*M);
            rotate(angle);
            let x = this.direction*(this.seesaw.length/2-this.radius)*M;
            let y = (this.seesaw.thickness*2 + this.radius)*M;
            ellipse(x, y, this.radius*M, this.radius*M);
        pop();
    }
}



class Seesaw {
    /**
     * Seesaw that tosses boules
     * @param {number} x
     * @param {number} width
     * @param {number} height
     * @param {number} length
     * @param {number} thickness
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
        this.control = null;
    }

    draw() {
        fill(this.color);
        triangle((this.x-this.base/2)*M, 0, this.x*M, this.midY*M, (this.x+this.base/2)*M, 0);

        push();
        {
            translate(this.midX*M, this.midY*M);
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
    /**
     * Draws the infotext with name and date
     * @param {number} size 
     * @param {string|number[]} color 
     * @param {string} text 
     */
    constructor(size, color, text) {
        this.size = size;
        this.update();
        this.color = color;
        this.text = text;
    }

    update() {
        this.x = percentWidth;
        this.y = percentHeight;
        this.width = this.size*10*percentWidth;
        this.height = this.size*percentHeight;
        this.dim = [this.x, this.y, this.width, this.height];
    }

    draw() {

        this.update();

        push();
            rectMode(CORNER);
            fill(this.color);
            textSize(Math.min(this.height, this.width));
            text(this.text, ...this.dim);
        pop();
    }
}



class OverlayCircle {
    /**
    * A visualization circle of a certain size and color
    * @param {number} x
    * @param {number} y
    * @param {string | number[]} color
    * @param {object} seesaw
    */
    constructor(x, y, color, seesaw) {
        //Original parameters
        this.x = x;
        this.y = y;
        this.color = color;
        this.seesaw = seesaw;
        //Absolute values
        this.radius = ballRadius;
        this.intersects = false;
        this.status = false;
        //Calculated values
        this.oldX = x;
        this.oldY = y;
        this.direction = x/ Math.abs(x);
    }

    intersectsMouse() {
        // Based on Prof. N's code but altered to my fitting
        let mx = convPXtoKX(mouseX);
        let my = convPYtoKY(mouseY);

        if (!this.intersects) { // Not intersecting yet
            // only then recalculate and reset status
            this.intersects = sq(mx - this.x * M) + sq(my - this.y * M) <= sq(this.radius * M);
        }

        if ((this.intersects || this.status)) { // in circle
            this.status = true;

            if (mouseIsPressed && running) {
                // this.x = mx / M;
                this.y = my / M;
                // While mouse is down, move the seesaw bound to this circle
                this.seesaw.rotate(this.seesaw.angle - this.direction*(this.oldY-this.y));
            }
            else {
                angleMode(DEGREES);
                this.seesaw.rotate(0)
                this.intersects = false;
                this.status = false;
                // Only when mouse is released, update the circle values
                // this.oldX = this.x;
                this.oldY = this.y;
            }
        }
        this.draw();
    }

    draw() {
        push();
            noFill();
            ellipseMode(CENTER);
            stroke(this.color);
            ellipse(convKXtoPX(this.x*M), convKYtoPY(this.y*M), this.radius*2*M);
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
        //Parameter values
        this.size = size;
        this.offX = offX;
        //Absolute values
        this.intersects;
        this.pressed = false;
        this.textColor = "white";
        //Calculated value
        this.update();
        this.colors = colors.split("/");
        this.texts = texts.split("/");
    }

    intersectsMouse() {
        if (!this.intersects) { // Not intersecting yet
            // only then recalculate
            this.intersects = (mouseX > this.x-this.width/2 && mouseX < this.x+this.width/2) &&
                                (mouseY > this.y-this.height/2 && mouseY < this.y+this.height/2);
        }

        if ((this.intersects)) { // in button
            this.intersects = false;
            return this.toggle();
        }
        this.draw();
    }
    
    update() {
        this.x = canvasWidth-(this.offX+1)*percentWidth;
        this.y = canvasHeight-(this.size)*percentHeight;
        this.width = this.size*2*percentWidth;
        this.height = this.size*percentHeight;
        this.dim = [this.x, this.y, this.width, this.height];
    }

    draw() {
        this.update();
        
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

    toggle() {
        this.pressed = !this.pressed;
        return this.pressed;
    }
}
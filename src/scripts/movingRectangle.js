import MovingObject from "./movingObject";

export default class MovingRectangle extends MovingObject {
    
    constructor(argsHash) {
        super(argsHash);
        this.width = argsHash.width;
        this.height = argsHash.height;
        // debugger;
    }

    draw(canvasInterface) {
        // canvasInterface.fillStyle = this.color;

        const gradient = canvasInterface.createLinearGradient(this.xCoordinate, this.yCoordinate, this.xCoordinate, this.yCoordinate + this.height);
        
        gradient.addColorStop(0, "lightyellow");
        gradient.addColorStop(0.30, "yellow");
        gradient.addColorStop(0.5, "yellow");
        gradient.addColorStop(0.70, "yellow");
        gradient.addColorStop(1, "lightyellow");
        
        // Set the fill style to the gradient
        canvasInterface.fillStyle = gradient;
        canvasInterface.fillRect(this.xCoordinate, this.yCoordinate, this.width, this.height);
    }
}

// // Get a reference to the canvas element
// const canvas = document.getElementById('my-canvas');

// // Get the canvas context
// const ctx = canvas.getContext('2d');

// // Set the fill color and draw a filled rectangle
// ctx.fillStyle = 'red';
// ctx.fillRect(50, 50, 100, 100);

// // Set the stroke color and draw a stroked rectangle
// ctx.strokeStyle = 'blue';
// ctx.strokeRect(200, 50, 100, 100);
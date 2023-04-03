export default class MovingObject {

    constructor(argsHash) {
        this.xCoordinate = argsHash.xCoordinate; 
        this.yCoordinate = argsHash.yCoordinate;
        this.xVelocity = argsHash.xVelocity; 
        this.yVelocity = argsHash.yVelocity; 
        this.color = argsHash.color;
    }

    move() {
        // console.log(`before - x: ${this.xCoordinate} and y:${this.yCoordinate}`);
        this.xCoordinate = this.xCoordinate + this.xVelocity;
        this.yCoordinate = this.yCoordinate + this.yVelocity;
        // console.log(`after - x: ${this.xCoordinate} and y:${this.yCoordinate}`);
    }
}
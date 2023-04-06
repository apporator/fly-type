import MovingCharacter from "./movingCharacter";
import MovingObject from "./movingObject";
import { calculateCirclePoints } from "./util";

export default class Spiral extends MovingObject {

    constructor(argsHash) {
        super(argsHash);
        this.canvasInterface = argsHash.canvasInterface;
        this.radius = 30;
        this.charCount = 10;
        this.points = calculateCirclePoints(this.xCoordinate, this.yCoordinate, this.radius, this.charCount);
        this.characters = [];
        this.createChars();
        this.counter = 0;
        this.xDrop = this.points[0]["x"];
        this.yDrop = this.points[0]["y"];
    }

    createChars() {
        let alph = "abcdefghijk"

        for (let i = 0; i < this.charCount; i++) {
            const newChar = new MovingCharacter({
                xCoordinate: this.points[i]["x"],
                yCoordinate: this.points[i]["y"],
                xVelocity: 0, 
                yVelocity: 0, 
                character: alph[i],
                canvasInterface: this.canvasInterface,
                typeable: false
            })

            this.characters.push(newChar);
        }
    }

    move() {
        ++this.counter;
        
        if(this.counter % 3 === 0) {
            let firstX = this.characters[0].xCoordinate;
            let firstY = this.characters[0].yCoordinate;

            for (let index = 0; index < this.characters.length - 1; index++) {
                const element = this.characters[index];
                element.xCoordinate = this.characters[index+1].xCoordinate;
                element.yCoordinate = this.characters[index+1].yCoordinate;
            }

            let lastChar = this.characters[this.characters.length-1];
            lastChar.xCoordinate = firstX;
            lastChar.yCoordinate = firstY;
        }
    }

    draw (){
        this.characters.forEach((char) => {
            // debugger;
            char.draw(this.canvasInterface);
        })
    }


}
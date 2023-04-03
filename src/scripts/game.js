import MovingCharacter from "./movingCharacter";
import MovingRectangle from "./movingRectangle";

export default class Game {
   
    // static DICTIONARY = ["h","j","k","l"];
    static DICTIONARY = ["h"];

    constructor(canvasInterface) {
        this.canvasInterface = canvasInterface;
        this.width = canvasInterface.canvas.width;
        this.height = canvasInterface.canvas.height;
        this.charXpos = [0.23, 0.46, 0.69, 0.92]; //defines the quartiles from which the characters will be generated
        this.characters = [];

        //initialize the target bar that the letters will cross and give it starting positions
        this.targetBar = new MovingRectangle({
            xCoordinate: 0,
            yCoordinate: 400,
            xVelocity: 0, 
            yVelocity: 0, 
            color: "lightgrey",
            width: this.width,
            height: 30,
            canvasInterface: this.canvasInterface
        })
        // debugger;
        // console.log("here");
        //set the background for starters
        // console.log(this.width, this.height);
        // debugger;
        // this.addChar();

    }

    addChar() {

        let adder = this.width/5 //for now, we are only having characters fly from 4 vertical lanes
        // console.log(Game.DICTIONARY.length, "len");
        // debugger;
        const randomIndex = Math.floor(Math.random() * Game.DICTIONARY.length);

        if(this.charX === undefined || ((this.charX + adder) >= this.width)) {
            this.charX = adder;
        } else {
            this.charX = this.charX + adder
        }
        // console.log(this.charX);

        const vel = 3;
        
        const newChar = new MovingCharacter({
            xCoordinate: this.charX,
            yCoordinate: 0,
            xVelocity: 0, 
            yVelocity: vel, 
            character: Game.DICTIONARY[randomIndex],
            canvasInterface: this.canvasInterface
        })
        this.characters.push(newChar);
        
    }

    step() {
        this.characters.forEach((char) =>{
            char.move();
            this.colorChar(char);
        });
    }

    animate(){
        this.reset();
        this.characters.forEach((char) =>{
            char.draw(this.canvasInterface);
        });
    }

    reset() {
        // debugger;
        this.canvasInterface.fillStyle = "beige";
        this.canvasInterface.fillRect(0, 0, this.width, this.height);

        this.targetBar.draw(this.canvasInterface);
    }

    start() {
        this.gameInterval = setInterval(() => {
            this.step();
            this.animate();
        }, 17);
        
        this.charInterval = setInterval(() => {
            // console.log("char added");
            this.addChar();
        }, 500);
    }

    pause() {
        if(this.gameInterval) {
            clearInterval(this.gameInterval)
        };

        if(this.charInterval) {
            clearInterval(this.charInterval)
        };

        // debugger;
    }

    colorChar(char) {
        if (char.yCoordinate >= this.targetBar.yCoordinate && char.yCoordinate <= (this.targetBar.yCoordinate + this.targetBar.height + char.height)) {
            char.color = "red";
        } else {
            char.color = "black";
        }
    }
}
        
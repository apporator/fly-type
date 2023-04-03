import MovingCharacter from "./movingCharacter";
import MovingRectangle from "./movingRectangle";

export default class Game {
   
    // static DICTIONARY = ["h","j","k","l"];
    static DICTIONARY = ["h"]; // limited test chars

    constructor(canvasInterface) {
        this.canvasInterface = canvasInterface;
        this.width = canvasInterface.canvas.width;
        this.height = canvasInterface.canvas.height;
        this.characters = [];
        this.score = 0;

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
    }

    addChar() {

        let adder = this.width/5 //for now, we are only having characters fly from 4 vertical lanes

        const randomIndex = Math.floor(Math.random() * Game.DICTIONARY.length);

        if(this.charX === undefined || ((this.charX + adder) >= this.width)) {
            this.charX = adder;
        } else {
            this.charX = this.charX + adder
        }

        const vel = 2;
        
        const newChar = new MovingCharacter({
            xCoordinate: this.charX,
            yCoordinate: 0,
            xVelocity: 0, 
            yVelocity: vel, 
            character: Game.DICTIONARY[randomIndex],
            canvasInterface: this.canvasInterface,
            typeable: false
        })
        this.characters.push(newChar);
        
    }

    step() {
        
        for (let i = this.characters.length - 1; i >=0; i--) {
            const char = this.characters[i];
            char.move();

            if (this.charOffCanvas(char)) {
                // debugger;
                console.log("char deleted");
                this.characters.splice(i,1);
            } else {
                this.colorChar(char);
            }
        }
        console.log(this.characters.length, "num of chars");
    }

    charOffCanvas(char) {
        if (char.yCoordinate > (this.height + char.height)) {
            return true
        } else {
            return false;
        }
    }

    animate(){
        this.reset();
        this.characters.forEach((char) =>{
            char.draw(this.canvasInterface);
        });
        this.drawScore();
    }

    reset() {
        // debugger;
        this.canvasInterface.fillStyle = "beige";
        this.canvasInterface.fillRect(0, 0, this.width, this.height);

        this.targetBar.draw(this.canvasInterface);
    }

    drawScore() {
        this.canvasInterface.fillStyle = "black";
        this.canvasInterface.font = '14px Arial';
        this.canvasInterface.fillText(`Score: ${this.score}`, 0.01*this.width,0.99*this.height);
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
            char.typeable = true;
            char.color = "red";
        } else {
            char.typeable = false;
            char.color = "black";
        }
    }

    
    checkEntry(inputChar) {
        const matchingChars = this.characters.filter((char) => {
            if(char.character === inputChar && char.typeable) {
                this.score = this.score + 10;
                return true;
            }
        })
        if (matchingChars.length > 0) {
            matchingChars.forEach((hitChar) => {
                const delIdx = this.characters.indexOf(hitChar);
                this.characters.splice(delIdx,1);
            });
        } else {
            // console.log("miss!");
            return false;
        }
    }
}
        
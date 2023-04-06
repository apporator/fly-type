import MovingCharacter from "./movingCharacter";
import MovingRectangle from "./movingRectangle";
import Spiral from "./spiral";
import { genSentence, getMsg, selectRand, setBanner, setMsg } from "./util";

export default class Game {
   
    // static DICTIONARY = ["h","j","k","l"];
    // static DICTIONARY = ["h"]; // limited test chars
    
    static ADJECTIVES = ['furry', 'happy', 'gloomy', 'friendly'];
    static NOUNS = ['dog', 'cat', 'tree', 'mountain'];
    static VERBS = ['ran', 'jumped', 'slept', 'ate'];
    static ADVERBS = ['quickly', 'slowly', 'loudly', 'quietly'];

    constructor(canvasInterface) {
        this.canvasInterface = canvasInterface;
        this.width = canvasInterface.canvas.width;
        this.height = canvasInterface.canvas.height;
        this.gameOver = false;
        this.paused = true;

        this.scoreOutput = document.getElementById("game-score");
        this.livesOutput = document.getElementById("game-lives");

        this.reset();

        this.xCharOptions = [
            this.width*0.20,
            this.width*0.40,
            this.width*0.60,
            this.width*0.80
        ];
        
        // this.img.style.width = '100%';
        // this.img.style.height = '100%';


        // debugger;

        //initialize the target bar that the letters will cross and give it starting positions
        this.targetBar = new MovingRectangle({
            xCoordinate: 0,
            yCoordinate: this.height*0.75,
            xVelocity: 0, 
            yVelocity: 0, 
            color: "lightgrey",
            width: this.width,
            height: 50,
            canvasInterface: this.canvasInterface,
        })
        // debugger;
        // this.drawBackdrop();

        this.img = new Image();
        this.img.src = 'assets/fullLegalPad500.png';

        this.img.onload = () => {
            this.drawBackdrop();
            this.targetBar.draw(this.canvasInterface);
        }

        // let spiralY = this.height*0.2;
        this.wordSpirals = [];

        this.xCharOptions.forEach((x) => {
                const newSpiral = new Spiral({
                xCoordinate: x,
                yCoordinate: this.height*0.2,
                xVelocity: 0, 
                yVelocity: 0, 
                // color: "lightgrey",
                // width: this.width,
                // height: 50,
                canvasInterface: this.canvasInterface
            })
            this.wordSpirals.push(newSpiral);
        });
    }

    printScore() {
        this.scoreOutput.innerHTML = this.score;
    }

    printLives() {
        this.livesOutput.innerHTML = this.lives;
    }

    addChar() {
        const charToAdd = this.targetArray[0];
        this.wordPause--;
        if (this.wordPause > 0) {
            --this.wordPause;
        } else if (this.characters.length >= 1 && this.characters[this.characters.length-1].yCoordinate <= this.height*0.05) {
            //do nothing if the most recently added character is still within the first 5% of the height of the board
        }
        else if(charToAdd === " ") {
            this.targetArray.shift();
            this.wordPause = 3;
            this.charVel = this.charVel*1.2;
        }
        else if (this.targetArray.length > 0 && this.wordPause <= 0){
            const newChar = new MovingCharacter({
                xCoordinate: selectRand(this.wordSpirals).xDrop,
                yCoordinate: this.wordSpirals[0].yDrop,
                xVelocity: 0, 
                yVelocity: this.charVel, 
                character: this.targetArray.shift(),
                canvasInterface: this.canvasInterface,
                typeable: false
            })
            this.characters.push(newChar);
        } else if (this.characters.length === 0) {
            this.resetSentence();
        }
    }

    // removeChar() {
    //     return this.noSpaceTarget.shift();
    // }

    // sentenceCleared() {
    //     return (this.noSpaceTarget.length === 0 || this.characters.length === 0)
    // }

    resetSentence() {
        this.targetSentence = genSentence();
        this.targetArray = Array.from(this.targetSentence);
        // this.noSpaceTarget = Array.from(this.targetSentence.split(" ").join(""));
        setBanner(this.targetSentence);
    }

    step() {
        
        for (let i = this.characters.length - 1; i >=0; i--) {
            const char = this.characters[i];
            char.move();

            if (this.charOffCanvas(char)) {
                // debugger;
                // console.log("char deleted");
                this.characters.splice(i,1);
            } else {
                this.colorChar(char);
            }
        }

        this.wordSpirals.forEach((spiral) => {
            spiral.move();
        })
        
        //end game if score is <=0
        if (!this.hasLives()) {
            this.pause();
            this.slowChars();
            // this.drawCounters();
            // this.characters = [];
            // this.reset();
            this.gameOver = true;
            // debugger;
            // console.log("game over");
            // debugger;
        }
        // console.log(this.characters.length, "num of chars");
    }

    slowChars() {
        // console.log("chars slowed");
        this.characters.forEach((char) => {
            char.yVelocity = 0.8;
        })
        this.wordPause = 15;
        this.charVel = 2;
    }

    hasLives() {
        return this.lives > 0;
    }

    charOffCanvas(char) {
        if (char.yCoordinate > (this.height + char.height)) {
            this.lives --;

            let adder = ""

            if (!this.hasLives()) {
                adder = '. Enter to replay'
            }

            setMsg(`Oh no, you missed ${char.character}${adder}`, "black", "grey");
            // this.pause();
            this.slowChars();
            this.animate(false);
            return true
        } else {
            return false;
        }
    }

    animate(withChars = true){
        this.drawBackdrop();
        this.targetBar.draw(this.canvasInterface);

        this.characters.forEach((char) =>{
            char.draw(this.canvasInterface);
        });
        
        this.wordSpirals.forEach((spiral) => {
            spiral.draw();
        });
        
        this.drawCounters();
    }

    drawCounters() {
        this.printLives();
        this.printScore();
    }

    start() { 
        // debugger;
        setMsg("");
        this.paused = false;
        this.gameInterval = setInterval(() => {
            // this.paused = false;
            if (this.gameOver) {
                this.reset();
                this.gameOver = false;
            }

            this.step();
            
            if (!this.gameOver) this.animate();
        
        }, 17);
        
        this.charInterval = setInterval(() => {
            // console.log("char added");
            this.addChar();
        }, 500);
    }

    pause() {
        clearInterval(this.gameInterval);
        clearInterval(this.charInterval);
        this.paused = true;
        this.drawCounters();
        // debugger;
        // setMsg("Game paused. Space to resume.")
        this.addOverlay()
    }

    addOverlay(color = "grey", transparency = 0.5) {
        this.canvasInterface.globalAlpha = transparency;
        this.canvasInterface.fillStyle = color;
        this.canvasInterface.fillRect(0,0,this.width,this.height);
        this.canvasInterface.globalAlpha = 1;
    }

    checkEntry(inputChar) {

        let validChar = null;

        //1. for each character that matches the user's input and is in the hit zone, give the user points, increase their lives, and add the character to a separate array to be deleted
        const matchingChars = this.characters.filter((char) => {
            if(char.character === inputChar && char.typeable) {
                // debugger;
                if (char.points === 15) {
                    setMsg("Right on target - Nice!", "red", "gold");
                } else {
                    setMsg("Close....", "black", "grey");
                }

                this.score = Math.floor(this.score + char.points*char.yVelocity);
                // this.lives = Math.min(this.lives + 1, 3);
                return true;
            } else if (char.typeable) {
                validChar = char.character;
            }
        })

        // cycle through these matching characters and delete them from the game as they have been hit
        if (matchingChars.length > 0) {
            matchingChars.forEach((hitChar) => {
                const delIdx = this.characters.indexOf(hitChar);
                this.characters.splice(delIdx,1);
            });
        } else {
            this.lives = this.lives - 1;

            let adder = "";
            
            if(validChar) {
                adder = ` instead of ${validChar}`;
            }
            
            if (!this.hasLives()) {
                adder = adder + ". Enter to replay!"
            }

            setMsg(`Argh. You entered ${inputChar}${adder}`, "yellow", "red");
            this.slowChars();
            // this.pause();
            this.animate(false);
            return false;            
        }
    }

    colorChar(char) {
        //checks if it is within the topmost and bottommost bounds of the target bar
        
        //the top of the bar
        const entry = this.targetBar.yCoordinate;
        const exit = this.targetBar.yCoordinate + this.targetBar.height + char.height;

        if (char.yCoordinate >= entry && char.yCoordinate <= exit) {

            let diff = exit - entry;
            let segment = (char.yCoordinate - entry) / diff

            if (segment >= 0.2 && segment <= 0.8) {
                char.color = "yellow";
                char.points = 15;
            } else {
                char.color = "red";
                char.points = 10;
            }
            char.typeable = true;      
        } else {
            char.typeable = false;
            char.points = 0;
            char.color = "black";
        }
    }

    drawBackdrop () {
        this.canvasInterface.clearRect(0, 0, this.width, this.height);
        this.canvasInterface.globalAlpha = 0.4;
        this.canvasInterface.drawImage(this.img,0,0)

        this.canvasInterface.globalAlpha = 1;
    }

    // replayScreen() {
    //     this.drawCounters();

    //     const newMsg = `${getMsg()} Enter to replay.`
    //     setMsg(newMsg, "yellow", "red");
    //     // this.reset();
    //     // this.animate();
    //     // setMsg("Game over :( select return to play again!")
    // }

    //called at initiation of each new game
    reset() {
        this.characters = [];
        this.score = 0;
        this.lives = 3;
        this.charX = null;
        this.resetSentence();
        this.wordPause = 0;
        this.charVel = 2;
        this.printLives();
        this.printScore();
    }
}
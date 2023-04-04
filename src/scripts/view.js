import Game from "./game";
import key from 'keymaster';

export default class View {
    

    constructor(canvasInterface) {
        this.canvasInterface = canvasInterface;
        this.game = new Game(canvasInterface);
        this.bindKeys();
        this.gameRunning = false;
        this.updateHTMLScore();
        // document.cookie = '';
        // debugger;
    }

    bindKeys() {
        // key('left', () => this.game.ship.power([-1, 0]));
        key('return', () => {
            // debugger;
            this.startGame();
        });
        key('h', () => this.game.checkEntry('h'));
        key('j', () => this.game.checkEntry('j'));
        key('k', () => this.game.checkEntry('k'));
        key('l', () => this.game.checkEntry('l'));
        key('space', () => this.gameToggle());
        key('right', () => {
            this.game.step();
            this.game.animate();
        });
    }

    startGame() {
        this.gameRunning = true;
        this.game.start();

        this.gameCheckInterval = setInterval(() => {
            console.log("game checked");
            this.checkGame();
        }, 17);

    }

    //this checker checks whether the game is over and if so takes the necessary action
    checkGame() {
        if (this.game.gameOver) {
            // this.game.gameOver = false;
            // console.log("the game is over!!")
            clearInterval(this.gameCheckInterval);
            this.gameRunning = false;

            if (document.cookie === '' || this.game.score > this.cookieScore()){
                document.cookie = `highScore=${this.game.score}`;
                this.updateHTMLScore();
            }

            this.game.replayScreen();
        }
    }

    cookieScore() {
        let score = null;
        const cookies = document.cookie;
        const splitCookies = cookies.split(";");
        for (let i = 0; i < splitCookies.length; i++) {
            const pair = splitCookies[i];
            const keyValue = pair.split("=");

            if (keyValue[0] === "highScore") {
                score = parseInt(keyValue[1]);
                break;
            }
        }

        return score;
    }

    updateHTMLScore(){
        const scoreBoard = document.getElementById("scores");
        scoreBoard.innerHTML = `High Score: ${this.cookieScore()}`
    }

    gameToggle(){
        if (this.gameRunning) {
            this.pauseGame();
        } else {
            this.startGame();
        }
    }

    pauseGame(){
        this.gameRunning = false;
        this.game.pause()
    }
}


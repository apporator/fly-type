import Game from "./game";

export default class View {
    
    static INPUT = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'y', 'x',
        'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
        'Y', 'X', 'Y', 'Z'
      ];

    constructor(canvasInterface) {
        this.canvasInterface = canvasInterface;
        this.game = new Game(canvasInterface);
        this.bindKeys();
        this.updateHTMLScore();
    }

    bindKeys() {

        document.addEventListener('keydown', (event) => {
            
            this.handleKey(event);
            // debugger;
        });

    }

    handleKey(event) {
        const key = event.key;
        // debugger;

        if (key === ' ' || key === 'Enter') {
            // debugger;
            // console.log("restarting");
            this.gameToggle();
        } else if (key === 'ArrowRight') {
            this.game.step();
            this.game.animate();
        } else if (View.INPUT.indexOf(key) >= 0 && !this.game.paused) {
            this.game.checkEntry(key);
        } else {
            console.log(key, `did not process your ${key}`);
        }
    }

    //this checker checks whether the game is over and if so takes the necessary action
    checkGame() {
        if (this.game.gameOver) {
            // this.game.gameOver = false;
            // console.log("the game is over!!")
            clearInterval(this.gameCheckInterval);

            if (document.cookie === '' || this.game.score > this.cookieScore()){
                document.cookie = `highScore=${this.game.score}`;
                this.updateHTMLScore();
            }
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
        const displayScore = this.cookieScore();
        const scoreBoard = document.getElementById("scores");
        if (displayScore) {
            scoreBoard.innerHTML = `High Score: ${displayScore}`;
        } else {
            scoreBoard.innerHTML = `No high score...yet`;
        }
    }

    gameToggle(){
        if(this.game.paused) {
            this.game.start();
            this.gameCheckInterval = setInterval(() => {
                // console.log("game checked");
                this.checkGame();
            }, 17);
        } else {
            clearInterval(this.gameCheckInterval);
            this.game.pause()
        }
    }
}


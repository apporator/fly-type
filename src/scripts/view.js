import Game from "./game";
import key from 'keymaster';

export default class View {
    

    constructor(canvasInterface) {
        this.canvasInterface = canvasInterface;
        this.game = new Game(canvasInterface);
        this.bindKeys();
        this.gameRunning = false;
    }

    bindKeys() {
        // key('left', () => this.game.ship.power([-1, 0]));
        key('k', () => console.log("k key pressed"));
        key('h', () => console.log("h key pressed"));
        key('j', () => console.log("j key pressed"));
        key('l', () => console.log("l key pressed"));
        key('space', () => this.gameToggle());
        key('right', () => {
            this.game.step();
            this.game.animate();
        });
    }

    startGame() {
        this.gameRunning = true;
        this.game.start();
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


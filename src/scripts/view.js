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


import Game from "./game";
import key from 'keymaster';

export default class View {
    

    constructor(canvasInterface) {
        this.canvasInterface = canvasInterface;
        this.game = new Game(canvasInterface);
        this.bindKeys();
    }

    bindKeys() {
        // key('left', () => this.game.ship.power([-1, 0]));
        key('k', () => console.log("k key pressed"));
        key('h', () => console.log("h key pressed"));
        key('j', () => console.log("j key pressed"));
        key('l', () => console.log("l key pressed"));
        key('space', () => {
            clearInterval(this.gameInterval);
            clearInterval(this.charInterval);
        });
    }

    start() {
        
        // this.game.addChar();
        this.gameInterval = setInterval(() => {
            this.game.step();
            this.game.animate();
        }, 17);

        this.charInterval = setInterval(() => {
            console.log("char added");
            this.game.addChar();
        }, 500);
    }
}


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
    }
}


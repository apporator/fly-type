import Game from "./game";

export default class View {

    constructor(canvasInterface) {
        this.canvasInterface = canvasInterface;
        this.game = new Game(canvasInterface);
    }

    
}
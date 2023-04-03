import MovingRectangle from "./movingRectangle";

export default class MovingCharacter extends MovingRectangle {

    static FONT = '20px Arial';

    constructor(argsHash) {
        super(argsHash);
        this.character = argsHash.character;
        this.color = (argsHash.color || "blue");
    }

    draw(canvasInterface) {
        // debugger;
        canvasInterface.fillStyle = this.color;
        canvasInterface.font = MovingCharacter.FONT;
        canvasInterface.fillText(this.character, this.xCoordinate, this.yCoordinate);
    }
}
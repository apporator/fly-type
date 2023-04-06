import MovingRectangle from "./movingRectangle";

export default class MovingCharacter extends MovingRectangle {

    static FONT = '20px Georgia';

    constructor(argsHash) {
        super(argsHash);
        this.character = argsHash.character;
        this.color = (argsHash.color || "black");
        this.canvasInterface = argsHash.canvasInterface;
        this.typeable = argsHash.typeable;
        this.points = 0;
    }

    draw(canvasInterface) {
        // debugger;
        canvasInterface.fillStyle = this.color;
        canvasInterface.font = MovingCharacter.FONT;
        canvasInterface.fillText(this.character, this.xCoordinate, this.yCoordinate);
    }

    get height(){
        this.canvasInterface.font = MovingCharacter.FONT;
        const fontMath = this.canvasInterface.measureText(this.character);
        const h = fontMath.actualBoundingBoxAscent + fontMath.actualBoundingBoxDescent
        
        return h;
    }

    set height(value){
        //setting height does nothing. Can only be set by changing the character
    }
}
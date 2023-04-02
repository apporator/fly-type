import Game from "./game";
import View from "./view";


// get the canvas element
const canvas = document.getElementById("game-canvas");

//set the canvas dimensions according to game constants
canvas.width = Game.WIDTH;
canvas.height = Game.HEIGHT;

//get the canvas Interface
const canvasInterface = canvas.getContext('2d');

//set the background for starters
canvasInterface.fillStyle = "red";
canvasInterface.fillRect(0, 0, canvas.width, canvas.height);
console.log("hello")
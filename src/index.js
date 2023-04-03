import Game from "./scripts/game";
import View from "./scripts/view";

// get the canvas element
const canvas = document.getElementById('game-canvas');
// console.log(document,"doc");
// console.log(Game.WIDTH, "width");
// console.log(Game.HEIGHT, "height");
// console.log(canvas, "canvas");

//set the canvas dimensions according to game constants
canvas.width = 500;
canvas.height = 500;

//get the canvas Interface
const canvasInterface = canvas.getContext('2d');

//set the background for starters


const view = new View(canvasInterface);
view.startGame();
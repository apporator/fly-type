import Game from "./scripts/game";
import View from "./scripts/view";

// const chance = require('chance').Chance();


// const gameAssetDiv = document.getElementById("game-assets");
// const vertDivs = Array.from(document.getElementsByClassName("vertical-panel"));

// gameAssetDiv.style.height = "550px";
// gameAssetDiv.style.width = "1000px";
// debugger;
// vertDivs.forEach(div => {
//     div.style.height = '500px';
// });

// get the canvas element
const canvas = document.getElementById('game-canvas');

//set the canvas dimensions according to game constants
canvas.width = 500;
canvas.height = 500;

//get the canvas Interface
const canvasInterface = canvas.getContext('2d');

//set the background for starters


const view = new View(canvasInterface);
window.view = view;
view.startGame();
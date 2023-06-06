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

const userAgent = navigator.userAgent;
const isMobile = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
// console.log(isMobile, "ismobile");

if(isMobile) {
    const body = document.querySelector('body');
    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('overlay');

    const mobileMsgDiv = document.createElement('div');
    mobileMsgDiv.innerHTML = 'This application doesn\'t support mobile devices, please return on a desktop device.<br/><a href="https://apporator.github.io/fly-type/">https://apporator.github.io/fly-type/</a>'
    mobileMsgDiv.classList.add('mobile-message');

    const wordImageContainer = document.getElementById("word-image-container");

    body.appendChild(overlayDiv);
    overlayDiv.appendChild(mobileMsgDiv);
    body.style.overflow = "hidden";
    wordImageContainer.style.overflow = "hidden";
}

const view = new View(canvasInterface);
window.view = view;
// view.startGame();
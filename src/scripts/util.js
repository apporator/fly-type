import Game from "./game";

let color = true;

export function selectRand(array) {
    if(!array.length) return null;

    const randIndex = Math.floor(Math.random() * array.length);

    return array[randIndex];
}

export function genSentence() {
    // debugger;

    const adjective = selectRand(Game.ADJECTIVES);
    const noun = selectRand(Game.NOUNS);
    const verb = selectRand(Game.VERBS);
    const adverb = selectRand(Game.ADVERBS);

    const sentence = `${adjective} ${noun}s ${verb} ${adverb}`;
    return sentence;
}

export function setBanner(msg) {
    const senDiv = document.getElementById("sentence")
    senDiv.innerHTML = msg;
}

const msgDiv = document.getElementById("message")

export function setMsg(msg, color = "", background = "") {
    msgDiv.style.backgroundColor = background;
    msgDiv.style.color = color;
    msgDiv.innerHTML = msg;
}

export function getMsg() {
    return msgDiv.innerHTML;
}
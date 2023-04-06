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

export function calculateCirclePoints(centerX, centerY, radius, numPoints) {
    const points = [];
    for (let i = 0; i < numPoints; i++) {
      const angle = i * 2 * Math.PI / numPoints;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      points.push({x: x, y: y});
    }
    return points;
  }

  const list = document.getElementById("lives-lost");

  export function appendMiss(msg) {
    
    let entry = document.createElement("li");
    entry.innerHTML = msg;
    list.appendChild(entry);
  }

  export function clearMiss(){
    list.innerHTML = "";
  }
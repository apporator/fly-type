
export function selectRand(array) {
    if(!array.length) return null;

    const randIndex = Math.floor(Math.random() * array.length);

    return array[randIndex];
}

export function genSentence() {
    const sentence = `${Game.adjective} ${Game.noun}s ${Game.verb} ${Game.adverb}`;
    return sentence;
}
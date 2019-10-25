arr = [
  { insult: "Never hung poison on a fouler toad", play: "Richard III" },
  {
    insult: "He thinks too much: such men are dangerous",
    play: "Julius Ceasar"
  },
  {
    insult:
      "Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs",
    play: "The Merchant of Venice"
  },
  {
    insult: "Give me your hand...I can tell your fortune. You are a fool",
    play: "The Two Noble Kinsmen"
  },
  {
    insult:
      "He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish!",
    play: "The Tempest"
  },
  {
    insult:
      "It is a tale Told by an idiot, full of sound and fury, Signifying nothing",
    play: "Macbeth"
  },
  {
    insult:
      "Alas, poor heart, that kiss is comfortless As frozen water to a starved snake",
    play: "Titus Andronicus"
  },
  {
    insult:
      "He hath eaten me out of house and home; he hath put all substance into that fat belly of his",
    play: "Henry IV, Part 2"
  },
  {
    insult:
      "Out, you green-sickness carrion! Out, you baggage! You tallow-face!",
    play: "Romeo and Juliet"
  }
];

let pause = false;

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * max); //Il max è incluso e il min è incluso
}

const insult = document.getElementById("insult");
const play = document.getElementById("play");
const button = document.getElementById("btn");
const slider = document.getElementById("sliding-div");

let playArr = null;
let random = null;
let interval = null;
// let i = 0;

const getRandomInsult = () => {
  if (playArr === null || !playArr.length) {
    playArr = [...arr];
  }
  random = getRandom(0, playArr.length);
  insult.innerHTML = playArr[random].insult;
  play.innerHTML = playArr[random].play;
  playArr.splice(random, 1);
};

getRandomInsult();

const loop = () => {
  interval = setInterval(() => {
    if (!pause) {
      getRandomInsult();
    }
  }, 4000);
};

loop();

button.addEventListener("click", function(event) {
  event.preventDefault();
  button.innerHTML = pause ? "Pause" : "Start";
  slider.classList.toggle("slide");
  console.log(slider);
  pause = !pause;
  pause ? clearInterval(interval) : loop();
});

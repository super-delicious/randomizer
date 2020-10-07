'use strict';
let dogs = [{
  name: "Be honest rather clever.",
  color: "chocolate"
}, {
  name: "Let bygones be bygones.",
  color: "white"
}, {
  name: "Nothing is impossible to a willing heart.",
  color: "mix"
}, {
  name: "Living without an aim is like sailing without a compass",
  color: "brown"
}, {
  name: "Take control of your own desting.",
  color: "gold"
}, {
  name: "Live well, love lots, and laugh often.",
  color: "wave"
}]


let randomIndex;
let animating = false;
let trolls = [];
let imageCounter = 0;
let button;
let cnv;

function preload() {

  for (let i = 0; i < 7; i++) {
    trolls[i] = loadImage(`assets/troll_${i}.JPG`)
    //console.log(trolls);
  }
}

function setup() {
  console.log(trolls);
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");
  background(227, 253, 250);
  textSize(32);
  textFont('Courier New, Courier, monospace');
  textAlign(CENTER);
  fill(0, 0, 5);
  imageMode(CENTER);
  frameRate(8);
  text("start", width/2, height/2);

  //button = createButton("stat");
  button = select('#randButton');
  button.mousePressed(buttonPressed);
  button.class("ranButton");
  //console.log(trolls);
  // setTimeout(changeBackground, 1000);
  // setInterval(changeBackground, 1000);
}


function draw() {

  if (animating == true) {
    clear();
    image(trolls[imageCounter], width / 2, height / 2);
    if (imageCounter < trolls.length - 1) {
      imageCounter++;
      console.log(imageCounter)
    } else {
      imageCounter = 0;
    }
  }
}


function changeBackground() {
  if (counter <= 5) {
    counter++;
    console.log(counter)
    background(random(255), random(255), random(255));
    setTimeout(changeBackground, 1000);
  } else {
    background(random(255), random(5), random(5));
  }
}

function randomizer() {

  animating = false;

  if (dogs[0]) {
    //  background(random(110), random(25), random(55));
    clear();
    randomIndex = int(random(dogs.length));
    image(random(trolls), width / 2, height / 2);
    text(dogs[randomIndex].name, width / 2, height / 2);
    dogs.splice(randomIndex, 2);
  } else {
    text("ends",width/2, height/2);
  }



}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}

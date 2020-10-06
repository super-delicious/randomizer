let dogs = [{
  name: "dudu",
  color: "chocolate"
}, {
  name: "bobby",
  color: "white"
}, {
  name: "milky",
  color: "mix"
}, {
  name: "olivia",
  color: "brown"
}, {
  name: "jackey",
  color: "gold"
}, {
  name: "tutu",
  color: "wave"
}]

let randomIndex;
let animating = false;
let trollss = [];
let imageCounter = 0;
let button;
let cnv;

function preload() {

  for (let i = 0; i <= 7; i++) {
    bgs[i] = loadImage(`assets/troll_${i}.JPG`)
  }


}




function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");
  background(227, 253, 250);
  textSize(32);
  textFont('Courier New, Courier, monospace');
  textAlign(CENTER);
  fill(0,0,5);
  imgaeMode(CENTER);
  frameRate(8);

  text("start", 50, 50);

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
    text(dogs[randomIndex].name, width/2, heright/2);
    dogs.splice(randomIndex, 2);
  } else {
    background(random(200, 255));
    text("ends", 50, 50);
  }



}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 3000);


}

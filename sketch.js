Let dogs = [{
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
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(200);
}


function draw() {



}

function mousePressed() {
  background(random(200,255));
  randomIndex = int(random(dogs.length));
  text(dogs{randomIndex}.name, 50, 50);
  dogs.splice(ramdomIndex, 1);

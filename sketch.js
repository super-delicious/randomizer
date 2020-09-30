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
let counter = 0;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("click to randomize", 50 ,50);

  setTimeout(changeBackground, 1000);
 // setInterval(changeBackground, 1000);
}


function draw() {



}


function changeBackground(){
  if (counter <= 5){
    counter++;
    console.log(counter)
  background(random(255), random(255), random(255));
  setTimeout(changeBackground, 1000);
  }else {
  background(random(255), random(5), random(5));
  }
}



function mousePressed() {

if (dogs[0]){
  background(random(200,255));
  randomIndex = int(random(dogs.length));
  text(dogs{randomIndex}.name, 50, 50);
  dogs.splice(ramdomIndex, 1);
} else {
  background(random(200, 255));
  text("ends", 50, 50);
}
}



 

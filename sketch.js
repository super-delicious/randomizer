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


function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("start", 50, 50);

  // setTimeout(changeBackground, 1000);
  // setInterval(changeBackground, 1000);
}


function draw() {

  if (animating == true) {
    fill(random(20, 0, 50));
    curve(random(width), random(height), random(width), random(height), random(width), random(height), random(5, 50), random(50, 400));
  }

}


//function changeBackground(){
// if (counter <= 5){
//   counter++;
//   console.log(counter)
// background(random(255), random(255), random(255));
// setTimeout(changeBackground, 1000);
//  }else {
//  background(random(255), random(5), random(5));
// }
//}

function randomizer() {

  animating = false;

  if (dogs[0]) {
    background(random(255, 255, 255));
    randomIndex = int(random(dogs.length));
    text(dogs[randomIndex].name, 50, 50);
    dogs.splice(randomIndex, 2);
  } else {
    background(random(200, 255));
    text("ends", 50, 50);
  }



}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 3000);


}

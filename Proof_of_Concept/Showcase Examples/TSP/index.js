var cities = []; //vector of cities
const totalCities = 10;

var population = [];
var popSize = 500;
var fitness = [];

var recordDistance = Infinity;
var bestEver;
var currentBest;

//draw canvas
setup = () => {
  createCanvas(800, 800);
  let order = []; //how to go through all cities

  for (let i = 0; i < totalCities; i++) {
    let v = createVector(random(width), random(height/2));
    cities[i] = v;
    order[i] = i;
  }

  for (let i = 0; i < popSize; i++) {
    population[i] = shuffle(order); //p5 shuffle fn
  }
  console.log(population)
}

//draw all cities and routes between them
draw = () => {
  background(0);

  //initiate genetic algorithm logic
  calcFitness();
  normFitness();
  nextGeneration();

  stroke(255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (let i = 0; i < bestEver.length; i++) {
    let j = bestEver[i];
    vertex(cities[j].x, cities[j].y);
    ellipse(cities[j].x, cities[j].y, 16, 16);
  }
  endShape();

  translate(0, height/2);
  stroke(255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (let i = 0; i < currentBest.length; i++) {
    let j = currentBest[i];
    vertex(cities[j].x, cities[j].y);
    ellipse(cities[j].x, cities[j].y, 16, 16);
  }
  endShape();
}

//try different connection from current node aka shuffling
var swap = (a, i, j) => {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

//calculate distance between two locations
calcDist = (points, order) => {
  let sum = 0;
  for (let i = 0; i < order.length - 1; i++) {
    let cityAIndex = order[i];
    let cityA = points[cityAIndex];
    let cityBIndex = order[i+1];
    let cityB = points[cityBIndex];
    let d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
    sum += d;
  }
  return sum;
}
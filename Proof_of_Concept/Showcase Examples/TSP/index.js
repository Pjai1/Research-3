var cities = []; //vector of cities
const totalCities = 6;

var population = [];
var fitness = [];

var recordDistance = Infinity;
var bestEver;

//draw canvas
var setup = () => {
  createCanvas(800, 600);
  let order = []; //how to go through all cities

  for (let i = 0; i < totalCities; i++) {
    let v = createVector(random(width), random(height));
    cities[i] = v;
    order[i] = i;
  }

  for (let i = 0; i < 100; i++) {
    population[i] = shuffle(order); //p5 shuffle fn
  }
  console.log(population)

  for (let i = 0; i < population.length; i++) {
    let d = calcDist(cities, population[i]);
    if (d < recordDistance) {
      recordDistance = d;
      bestEver = population[i];
    }
    fitness[i] = d;
  }
}

//draw all cities and routes between them
var draw = () => {
  background(0);

  stroke(255, 0, 255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (let i = 0; i < bestEver.length; i++) {
    let j = bestEver[i];
    vertex(cities[j].x, cities[j].y);
    ellipse(cities[j].x, cities[j].y, 16, 16);
  }
  endShape();
}

//try different connection from current node aka shuffling
// var swap = (a, i, j) => {
//   let temp = a[i];
//   a[i] = a[j];
//   a[j] = temp;
// }

//calculate distance between two locations
var calcDist = (points, order) => {
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
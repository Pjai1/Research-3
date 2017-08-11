var cities = [];
const totalCities = 6;

var recordDistance;
var bestEver;

//draw canvas
var setup = () => {
  createCanvas(1024, 768);

  for (let i = 0; i < totalCities; i++) {
    let v = createVector(random(width), random(height));
    cities[i] = v;
  }

  let d = calcDist(cities);
  recordDistance = d;
  bestEver = cities.slice();

}

//draw all cities and routes between them
var draw = () => {
  background(0);
  fill(255);
  for (let i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 8, 8);
  }

  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for (let i = 0; i < cities.length; i++) {
    vertex(cities[i].x, cities[i].y);
  }
  endShape();

  stroke(255, 0, 255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (let i = 0; i < cities.length; i++) {
    vertex(bestEver[i].x, bestEver[i].y);
  }
  endShape();

  let i = floor(random(cities.length));
  let j = floor(random(cities.length));
  swap(cities, i, j);

  let d = calcDist(cities);

  if (d < recordDistance) {
    recordDistance = d;
    bestEver = cities.slice();
  }
}

//try different connection from current node
var swap = (a, i, j) => {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

//calculate distance between two locations
var calcDist = (points) => {
  let sum = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    sum += d;
  }
  return sum;
}
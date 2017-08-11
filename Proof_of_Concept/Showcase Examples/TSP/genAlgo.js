//in genetic algorithms it is common to order your results, we order them by giving them a fitness value
calcFitness = () => {
    for (let i = 0; i < population.length; i++) {
    //find best ever
    let d = calcDist(cities, population[i]);
    if (d < recordDistance) {
      recordDistance = d;
      bestEver = population[i];
    }
    fitness[i] = 1/(d+1); //quality of the route
  }
}

//getting probabilities instead of arbitrary numbers
normFitness = () => {
    let sum = 0;

    for (let i = 0; i < fitness.length; i++) {
        sum += fitness[i];
    }

    for (let i = 0; i < fitness.length; i++) {
        fitness[i] = fitness[i] / sum;
    }
}

//copy previous generation for further testing
nextGeneration = () => {
    let newPopulation = [];
    for (let i = 0; i < population.length; i++) {
        let order = pickOne(population, fitness);
        mutate(order, 0.1);
        newPopulation[i] = order;
    }
    population = newPopulation;
}

//adding small subtle changes in the route nodes, kind of like shuffling
mutate = (order, mutationRate) => {
    let indexA = floor(random(order.length));
    let indexB = floor(random(order.length));
    swap(order, indexA, indexB);
}

//pick routes with high fitness values from current generation/population
pickOne = (list, prob) => {
    let counter = 0;
    let rnd = random(1);

    while (rnd > 0) {
        rnd = rnd - prob[counter];
        counter++;
    }
    counter--;
    return list[counter].slice();
}
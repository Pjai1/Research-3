//in genetic algorithms it is common to order your results, we order them by giving them a fitness value
calcFitness = () => {
    let currentRecord = Infinity;

    for (let i = 0; i < population.length; i++) {
    //find best ever
    let d = calcDist(cities, population[i]);
    if (d < recordDistance) {
      recordDistance = d;
      bestEver = population[i];
    }

    if (d < currentRecord) {
        currentRecord = d;
        currentBest = population[i];
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
        let orderA = pickOne(population, fitness);
        let orderB = pickOne(population, fitness);
        let order = crossOver(orderA, orderB);
        //with crossover the mutation rate can be brought down by traditionally a decimal number so /10
        mutate(order, 0.01);
        newPopulation[i] = order;
    }
    population = newPopulation;
}

//adding small subtle changes in the route nodes, kind of like shuffling
//mutation rate = how much chance does one bit have to change i.e. 10 = therefore 0.1
mutate = (order, mutationRate) => {
    for (let i = 0; i < totalCities; i++) {
        if (random(1) < mutationRate) {
            let indexA = floor(random(order.length));
            let indexB = (indexA+1) % totalCities;
            swap(order, indexA, indexB);
        }
    }
}


crossOver = (orderA, orderB) => {
    let start = floor(random(orderA.length));
    let end = floor(random(start+1, orderA.length));
    let newOrder = orderA.slice(start, end);

    //check for duplicates before doing crossover
    for (let i = 0; i < orderB.length; i++) {
        let city = orderB[i];
        if (!newOrder.includes(city)) {
            newOrder.push(city);
        }
    }
    return newOrder;
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
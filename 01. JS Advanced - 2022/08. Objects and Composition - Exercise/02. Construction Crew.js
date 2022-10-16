function constructionCrew(workers) {
  let result = {
    weight: Number,
    experience: Number,
    levelOfHydrated: Number,
    dizziness: Boolean,
  };
  for (const currWorker in workers) {
    result[currWorker] = workers[currWorker];
  }
  if (result.dizziness) {
    result.levelOfHydrated += 0.1 * result.weight * result.experience;
    result.dizziness = false;
  }
  return result;
}

// function constructionCrew(workers) {
//   const result = {};

//   for (const currWorker in workers) {
//     result[currWorker] = workers[currWorker];

//     if (result.dizziness) {
//       result.levelOfHydrated += 0.1 * result.weight * result.experience;
//       result.dizziness = false;
//     }
//   }
//   return result;
// }

// function constructionCrew(worker) {

//   if (worker.dizziness) {
//     worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
//     worker.dizziness = false;
//   }

//   return worker;
// }
console.log(
  constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true,
  })
);

console.log(
  constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true,
  })
);

console.log(
  constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false,
  })
);

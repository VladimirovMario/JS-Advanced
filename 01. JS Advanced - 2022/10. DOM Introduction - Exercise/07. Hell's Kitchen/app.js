function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  let start = document.querySelector(`#inputs > textarea`);

  function onClick() {
    if (start.value !== ``) {
      let input = JSON.parse(start.value);

      let restaurant = {};

      for (const currRestaurant of input) {
        let [name, workers] = currRestaurant.split(` - `);

        let currWorker = workers.split(`, `);

        for (const worker of currWorker) {
          let [workerName, salary] = worker.split(` `);

          if (restaurant.hasOwnProperty(name) == false) {
            restaurant[name] = {};
          }
          if (restaurant.hasOwnProperty(name)) {
            restaurant[name][workerName] = Number(salary);
          }
        }
      }

      let avgSalary = 0;
      let currAvgSal = 0;

      let bestRestaurant = ``;

      for (const currRest of Object.entries(restaurant)) {
        let totalSalary = 0;

        let salaries = Object.values(currRest[1]);
        for (const currSal of salaries) {
          totalSalary += currSal;
        }
        avgSalary = totalSalary / salaries.length;

        if (avgSalary > currAvgSal) {
          currAvgSal = avgSalary;
          bestRestaurant = currRest[0];
        }
      }

      let sorted = Object.entries(restaurant[bestRestaurant]).sort(
        (a, b) => b[1] - a[1]
      );

      let bestSalary = sorted[0][1];

      let result = ``;
      for (const [workerName, workerSalary] of sorted) {
        result += `Name: ${workerName} With Salary: ${workerSalary} `;
      }

      document.querySelector(
        `#bestRestaurant  p`
      ).textContent = `Name: ${bestRestaurant} Average Salary: ${currAvgSal.toFixed(
        2
      )} Best Salary: ${bestSalary.toFixed(2)}`;

      let bestWorkers = document.querySelector(`#workers p`);
      bestWorkers.textContent = result.trim();
    }
  }
}

// Test it with:
//["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"]
//["Mikes - Steve 1000, Ivan 200, Paul 800","Fleet - Maria 850, Janet 650"]

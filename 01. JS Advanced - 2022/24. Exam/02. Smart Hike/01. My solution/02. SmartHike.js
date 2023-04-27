class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }
  addGoal(peak, altitude) {
    if (this.goals.hasOwnProperty(peak)) {
      return `${peak} has already been added to your goals`;
    } else {
      this.goals[peak] = altitude;
      return `You have successfully added a new goal - ${peak}`;
    }
  }
  hike(peak, time, difficultyLevel) {
    if (this.goals.hasOwnProperty(peak) == false) {
      throw new Error(`${peak} is not in your current goals`);
    }
    if (this.goals.hasOwnProperty(peak)) {
      if (this.resources < 0) {
        throw new Error("You don't have enough resources to start the hike");
      }
      let diff = this.resources - time * 10;

      if (diff < 0) {
        return "You don't have enough resources to complete the hike";
      }
      this.resources -= time * 10;
      this.listOfHikes.push({ peak, time, difficultyLevel });
      return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }
  }
  rest(time) {
    this.resources += time * 10;
    if (this.resources >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    } else {
      return `You have rested for ${time} hours and gained ${time * 10}% resources`;
    }
  }
  showRecord(criteria) {
    if (this.listOfHikes.length == 0) {
      return `${this.username} has not done any hiking yet`;
    }

    if (criteria == `all`) {
      let allHikes = [];
      allHikes.push("All hiking records:");
      for (const iterator of this.listOfHikes) {
        allHikes.push(
          `${this.username} hiked ${iterator.peak} for ${iterator.time} hours`
        );
      }
      return allHikes.join(`\n`);
    }

    const isFound = this.listOfHikes.find(
      (el) => el.difficultyLevel == criteria
    );

    if (isFound) {
      let sorted = this.listOfHikes.sort((a, b) => a.time - b.time)[0];
      return `${this.username}'s best ${criteria} hike is ${sorted.peak} peak, for ${sorted.time} hours`;
    } else {
      return `${this.username} has not done any ${criteria} hiking yet`;
    }
  }
}

1; // input
// const user = new SmartHike("Jane");
// console.log(user.addGoal("Musala", 2925));
// console.log(user.addGoal("Rui", 1706));
// console.log(user.addGoal("Musala", 2925));
1; //output
// You have successfully added a new goal - Musala
// You have successfully added a new goal - Rui
// Musala has already been added to your goals

2; // input
// const user = new SmartHike("Jane");
// console.log(user.addGoal("Musala", 2925));
// console.log(user.addGoal("Rui", 1706));
// console.log(user.hike("Musala", 8, "hard"));
// console.log(user.hike("Rui", 3, "easy"));
// console.log(user.hike('Everest', 12, 'hard'));
2; // output
// You have successfully added a new goal - Musala
// You have successfully added a new goal - Rui
// You hiked Musala peak for 8 hours and you have 20% resources left
// You don't have enough resources to complete the hike
// Uncaught Error: Everest is not in your current goals

3; // input
// const user = new SmartHike("Jane");
// console.log(user.addGoal("Musala", 2925));
// console.log(user.hike("Musala", 8, "hard"));
// console.log(user.rest(4));
// console.log(user.rest(5));
3; // output
// You have successfully added a new goal - Musala
// You hiked Musala peak for 8 hours and you have 20% resources left
// You have rested for 4 hours and gained 40% resources
// Your resources are fully recharged. Time for hiking!

4; // input
// const user = new SmartHike('Jane');
// console.log(user.showRecord('all'));
4; // output
// Jane has not done any hiking yet

5; // input
// const user = new SmartHike('Jane');
// user.addGoal('Musala', 2925);
// user.hike('Musala', 8, 'hard');
// console.log(user.showRecord('easy'));
// user.addGoal('Vihren', 2914);
// user.hike('Vihren', 4, 'hard');
// console.log(user.showRecord('hard'));
// user.addGoal('Rui', 1706);
// user.hike('Rui', 3, 'easy');
// console.log(user.showRecord('all'));

5; // output
// Jane has not done any easy hiking yet
// Jane's best hard hike is Musala peak, for 8 hours
// All hiking records:
// Jane hiked Musala for 8 hours

6; // input
const user = new SmartHike("Jane");
user.addGoal("Musala", 2925);
user.hike("Musala", 5, "hard");
console.log(user.showRecord("easy"));
user.addGoal("Vihren", 2914);
user.hike("Vihren", 3, "hard");
console.log(user.showRecord("hard"));
user.addGoal("Rui", 1706);
user.hike("Rui", 1, "easy");
console.log(user.showRecord("all"));

6; // output
// Jane has not done any easy hiking yet
// Jane's best hard hike is Vihren peak, for 4 hours
// All hiking records:
// Jane hiked Vihren for 4 hours
// Jane hiked Musala for 5 hours
// Jane hiked Rui for 1 hours

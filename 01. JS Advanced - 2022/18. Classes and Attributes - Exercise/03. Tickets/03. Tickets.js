function tickets(array, sortCriterion) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  
  let arr = [];

  for (const currDest of array) {
    let [name, price, status] = currDest.split(`|`);

    arr.push(new Ticket(name, Number(price), status));
  }

  return arr.sort((a, b) => {
    if (typeof a[sortCriterion] == `number`) {
      return a[sortCriterion] - b[sortCriterion];
    } else {
      return a[sortCriterion].localeCompare(b[sortCriterion]);
    }
  });
}
console.log(
  tickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
console.log("--------");
console.log(
  tickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "status"
  )
);

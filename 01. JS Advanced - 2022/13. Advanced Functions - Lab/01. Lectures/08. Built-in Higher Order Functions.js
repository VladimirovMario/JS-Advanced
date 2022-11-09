/*
Array.prototype.map
Array.prototype.filter
Array.prototype.reduce
*/

users = [ { name: 'Tim', age: 25 },
          { name: 'Sam', age: 30 },
          { name: 'Bill', age: 20 } ];

getName = (user) => user.name;
usernames = users.map(getName);
console.log(usernames) // ["Tim", "Sam", "Bill"]
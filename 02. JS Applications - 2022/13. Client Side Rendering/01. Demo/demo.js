// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

function myTag(strings, ...values) {
    console.log(strings);
    console.log(values);
    console.log(this);
}

const name = `Peter`;
const myName = `John`;

myTag`Hello There, ${name}. Nice to meet you. My name is ${myName}.`

// [ 'Hello There, ', '. Nice to meet you. My name is ', '.' ]
// [ 'Peter', 'John' ]
{/* <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  }
} */}
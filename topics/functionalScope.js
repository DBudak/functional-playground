//function.prototype.apply calls a function and sets this
//function.prototype.call does the same but instead of array of args waits for list
function printObject(message) {
  return `${message}: ${JSON.stringify(this)}`;
}

const foo = {
  a: 1,
  b: 2
};
console.log(printObject.apply(foo, ["Object"])); //Object: {"a":1,"b":2} 

//function.prototype.bind attaches this scope but doesn't call
const person = {
  name: 'John',
  age: 32
};
const printPerson = printObject.bind(person);

console.log(printPerson('Person')); //Person: {"name":"John","age":32} 


//Arrow functions establish "this" based on the scope the Arrow function is defined within.
//call, apply, bind are not suitable for arrow functions since this is scoped to parent
window.year = 2017;
const o = {
  year: 2015
}

const addArrow = (a,b) => this.year + a + b;
function add(a,b) {return this.year + a + b};

console.log(addArrow.call(o,1,2)); //2017+1+2=2020
console.log(add.call(o,1,2)); //2015+1+2=2018

//Closure saves a snapshot of all variables in function scope, parent scope, global scope. 
//Has access to all of the above until it finishes execution, even if parent already returned
window.c = 2;
const add  = (a) => (b) => a+b+c;

console.log(add(1)(2)) // 5


//IIFE (Immediately invoked functions) allow for pseudo-module implementations. Help to avoid polluting global scope
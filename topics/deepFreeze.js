//Object immutability via deep freeze
const _isObject = (o) => typeof o === "object" && o !== null;

const deepFreeze = (o) => {
  Object.keys(o).forEach((key) => {
    if (_isObject(o[key]) && !Object.isFrozen(o[key])) deepFreeze(o[key]);
  });
  return Object.freeze(o);
};

let example = {
  dog: {
    name: "Fluffy",
    age: 8,
    habits: ["bark", "play"]
  },
  cat: {
    name: "Dan",
    age: 4,
    habits: ["sleep", "judge"]
  },
  rat: "Abraham"
};

// example.dog.age = 5; //works

Object.freeze(example);
// example.rat = "foo"; // throws
// example.cat.age = 2; // works

deepFreeze(example);
// example.rat = "foo"; // throws
// example.cat.age = 2; // throws

// Allows pseudo privacy in JS. 
// Parameters name, age, salary are private properties of Person, exist only in closure snapshots.
// Returned object is a primitive with no mutating methods
const Person = (name='John Doe', age='32', salary) => {
  let _name=name,
      _age = age,
      _salary = salary;
  return {
      name: () => _name,
      age: () => _age,
      print: () =>`${_name} is ${_age} years old.`,
      salary: () => 'Salary is private'
  }
};

const frank = Person('Frank Donovan', '26');
console.log(frank.print()); //Frank Donovan is 26 years old.
console.log(frank.salary()); //Salary is private
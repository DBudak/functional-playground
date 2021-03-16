// lenses (functional references)  allow immutable access and manipulation of objects and arrays
import * as R from "ramda";

const person = {
  name: "John Doe",
  age: 25,
  occupation: {
    title: "Software Engineer",
    level: "2"
  }
};

const nameLens = R.lensProp("name"); //lens on object prop
const titleLens = R.lensPath(["occupation", "title"]); //lens on nested object prop

//Getter, output: John Doe
const name = R.view(nameLens, person);

//Setter. person will not be mutated, new instance with new job title will be returned
const newPerson = R.set(titleLens, "QA Engineer", person);

//Setter. Applies function to lens property. Output: upper case name
const personWithUpperCaseName = R.over(nameLens, R.toUpper, person);

//Working with arrays
const dragons = ['Red', 'Black', 'Golden'];
const headLens = R.lensIndex(0) //lens focused on specific index

R.view(headLens, dragons) //Red
R.set(headLens, 'Blue', dragons) // ['Blue', 'Black', 'Golden'], original array intact
R.over(headLens, R.toUpper, dragons); //['RED', 'Black', 'Golden'], original array intact

import * as R from 'rambda';

console.clear();
//rambda point free methods

//A function that does nothing but return the parameter supplied to it.
R.identity(1); //1

//Runs the given function with the supplied object, then returns the object.
const log = s => console.log(s);
R.tap(log, 100); //100

//Logic ifElse
const incCount = R.ifElse(
  R.has('count'),
  R.over(R.lensProp('count'), R.inc),
  R.assoc('count', 1)
);
incCount({});           //=> { count: 1 }
incCount({ count: 1 }); //=> { count: 2 }

//Example:
const hasAccess = true;

if (hasAccess) {
  console.log('Access granted.');
} else {
  console.log('Access denied.');
}

//Point free:
const logAccess = R.ifElse(
  () => hasAccess,
  () => console.log('Access granted.'),
  () => console.log('Access denied.')
);

logAccess();

//or even more pure
const logAccess = R.ifElse(
  R.equals(true),
  R.always('Access granted.'), //K combinator, R.tap analog
  R.always('Access denied.')
);

const result = logAccess(true);

console.log({ result });

//More logic functions:
R.and(true, true); //=> true Returns true if both arguments are true; false otherwise.
R.any(true,false) // true. Returns true if at least one of the elements of the list match the predicate, false otherwise.
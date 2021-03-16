import * as R from 'rambda';

//Function composition allows to combine pure functions into meaningful domain level logic
const splitWords = str => str.split(' ');
const count = arr => arr.length;

const countWords = R.compose(count, splitWords); // note the order
const countWords2 = R.pipe(splitWords, count); // reverse order of compose

const str = `Quick brown fox didn't jump over anything.
   I don't really remember how it goes`;

console.log(countWords(str), countWords2(str)); //16 166
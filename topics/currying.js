import * as R from 'rambda';
//Converts multi parameter function into step-wise operator.
//Useful to delay operation until all parameters are passed

//Native JS Implementation
const sum = a => b => c => a+b+c;

sum(1) // f()
sum(1)(2) // f()
sum(1)(2)(3) //6

//Rambda can auto curry any method
const sumNotCurried = (a,b,c) => a + b + c;
sumNotCurried(1,2) //NaN;

const sumCurried = R.curry(sumNotCurried);
sumCurried(1)(2) // f()
sumCurried(1)(2)(3) //6

//Practical usage: OOP Interface analog
const useDb = true, db='', memory='';

const fetchFromDB = R.curry((db,id) => {
  console.log(`found ${id} in db`);
});
const fetchFromMemory = R.curry((memory,id) => {
  console.log(`found ${id} in memory`);
});

const findObject = (useDb) => useDb ? fetchFromDB(db) : fetchFromMemory(memory);

const ModuleA = (function () {
  findObject(false)('123');
})();

const ModuleB = (function () {
  findObject(true)('123');
})();

//Practical usage: Partial application
const logger = R.curry((date, logger, message) => {
  logger(`${date}: ${message}`);
});

const todayLogger = logger(Date.now(), console.log);

todayLogger('Is a good day'); 
todayLogger('Had no production issues'); 

const timestampedLogger = logger(`${new Date().toDateString()}`, console.log);

timestampedLogger('Is a good day');  
timestampedLogger('Had no production issues');
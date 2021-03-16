import * as R from 'rambda';

//Rambda try catch

const getUserSuccess = id => `found ${id}`;
const getUserFailure = id => {throw `${id} not found`};

//imperative
const fetchUserImperative = id =>{
  try {
    getUserFailure(id);
  }catch (e){
    console.log(e)
  }
}

fetchUserImperative(1);

//declarative
const userNotFoundError = id => `${id} not found`;
const fetchUserDeclarativeSuccess = R.tryCatch(getUserSuccess, userNotFoundError);
const fetchUserDeclarativeFail = R.tryCatch(getUserFailure, userNotFoundError);

const logger = s => console.log(s)

logger(fetchUserDeclarativeSuccess(2));
logger(fetchUserDeclarativeFail(2));
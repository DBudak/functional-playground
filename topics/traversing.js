import * as R from "rambda";

const debug = (x) => {
  console.log(x);
  return x;
};
const map = R.curry((fn, f) => f.map(fn));
const prop = R.curry((property, object) => object[property]);
const outputObj = R.compose(debug, prop);

const res = {
  title: "Some hideous API response",
  response: {
    ok: { isReceived: true, isValid: false },
    code: 204
  },
  items: [
    {
      title: "Golden Dragons",
      entities: [
        { name: "Aaroth", power: 92, age: 1920 },
        { name: "Barathorn", power: 23, age: 142 }
      ]
    },
    {
      title: "Red Dragons",
      entities: [
        { name: "Fulith", power: 40, age: 800 },
        { name: "Eagon", power: 82, age: 2560 }
      ]
    }
  ]
};

outputObj("title", res);

//Deep nesting
const isResponseReceived = R.compose(
  debug,
  prop("isReceived"),
  prop("ok"),
  prop("response")
);
isResponseReceived(res);

const getNameW = R.compose(map(prop("name")), prop("entities"));

const getDragonNames = R.compose(debug, map(getNameW), prop("items"));

getDragonNames(res);
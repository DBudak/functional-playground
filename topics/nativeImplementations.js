const compose = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

function curry(fn) {
  const arity = fn.length;
  return function $curry(...args) {
    if (args.length < arity) return $curry.bind(null, ...args);
    return fn.call(null, ...args);
  };
}

//debug chain
const tap = curry((tag, x) => {
  console.log(tag, x);
  return x;
});
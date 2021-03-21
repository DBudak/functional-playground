//Functor is a type that implements map method

//Identity is a box that accepts any type of value
export default class Identity {
  constructor(x) {
    this.$value = x;
  }

  static of(x) {
    return new Identity(x);
  }
}

Identity.of(3);
// Identity(3)

Identity.of('hotdogs');
// Identity("hotdogs")

Identity.of(Identity.of({ name: 'yoda' }));
// Identity(Identity({ name: 'yoda' }))

//Now Identity is a functor
Identity.prototype.map = function (f) {
  return Identity.of(f(this.$value));
};

Identity.of(2).map(two => two + 2); 
// Identity(4)

Identity.of('flamethrowers').map(s => s.toUpperCase()); 
// Identity('FLAMETHROWERS')

Identity.of('bombs').map(append(' away')).map(prop('length')); 
// Identity(10)
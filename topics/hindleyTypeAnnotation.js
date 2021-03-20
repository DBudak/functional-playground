// capitalize :: String -> String
const capitalize = s => toUpperCase(head(s)) + toLowerCase(tail(s));
//Here, capitalize takes a String and returns a String.

// strLength :: String -> Number
const strLength = s => s.length;

// join :: String -> [String] -> String
const join = curry((what, xs) => xs.join(what));

// match :: Regex -> String -> [String]
// match :: Regex -> (String -> [String])
const match = curry((reg, s) => s.match(reg));

// replace :: Regex -> String -> String -> String
const replace = curry((reg, sub, s) => s.replace(reg, sub));

// match :: Regex -> (String -> [String])
// onHoliday :: String -> [String]
const onHoliday = match(/holiday/ig);

// replace :: Regex -> (String -> (String -> String))
// replace :: Regex -> String -> String -> [String]
const replace = curry((reg, sub, s) => s.replace(reg, sub));

//Dynamic Types
// a -> b any type a to any type b
// a -> a any type a to same type a
// id :: a -> a
const id = x => x;

// map :: (a -> b) -> [a] -> [b]
const map = curry((f, xs) => xs.map(f));

// reduce :: ((b, a) -> b) -> b -> [a] -> b
const reduce = curry((f, x, xs) => xs.reduce(f, x));

// sort :: Car a => [a] -> [a]
// a must implement interface Car^
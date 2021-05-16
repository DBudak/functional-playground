/*
  For full theory check fantasy-land specs. Below is more or less practical functional programming hteory applied to JS.

  ADT (Alrebraic Data Type) - immutable composite data structure that contains other types:
    follows abstract algebra cocepts:
      identity - mapping the function over container yields a new container of the same type
      composability - composing 2 functions f and g is equivalent to mapping first g and then f
      associativity
    in JS practice:
      anything that implements .of() to construct new ADT of data (like Array.of())
      anything that implements function to transform data (like Array.map())
      anything that implements function to extract data (like Array.pop() or a getter)

  Functor - and ADT that implements .map. jQuery is a functor.

  Monad - and ADT that implements functor specification and .flatMap (iteration+extraction)

  Composability rule example:
    ['aa', 'bb', 'cc'].map(
      compose (
        toUpperCase,
        join,
        unique
      )
    );

    is equivalent to
    ['aa', 'bb', 'cc']
        .map(unique)
        .map(join)
        .map(toUpperCase)
*/
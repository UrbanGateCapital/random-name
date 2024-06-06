function add2(x) {
  return x + 2;
}

function multiply3(x) {
  return x * 3;
}

function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

let add2ThenMultply3 = compose(multiply3, add2);
console.log(add2ThenMultply3(5));






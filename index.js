
function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction(func) {
  return function namedFunc() {};
}

function returnsAnAnonymousFunction() {
  return function() {};
}

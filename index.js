function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return function something() {}
}

function returnsAnAnonymousFunction() {
  return function () {}
}

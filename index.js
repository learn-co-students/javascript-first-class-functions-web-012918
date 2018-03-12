function liftWeights() {
  console.log('Pump iron');
}

function runFiveMiles() {
  console.log('Go for a five-mile run');
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

function monday() {
  exerciseRoutine(liftWeights)
}

exerciseRoutine(function() {
  console.log('Stretch! Work that core!');
});

exerciseRoutine(() => {
  console.log('Stretch! Work that core!');
});

function returnsANamedFunction() {
  return runFiveMiles
}

function receivesAFunction(callback) {
  callback()
}

function returnsAnAnonymousFunction() {
  return () => {console.log('yo')}
}

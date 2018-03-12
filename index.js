function monday() {
  console.log('Go for a five-mile run');
  liftWeights()
}

function liftWeights() {
  console.log('Pump iron');
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

exerciseRoutine(() => console.log('Stretch! Work that core!'));
function morningRoutune(exercise) {
  let breakfast = null

  if (exercise === liftWeights) {
    breakfast = 'protein bar'
  } else if (exercise === swimFortyLaps) {
    breakfast = 'kale smoothie'
  } else {
    breakfast = 'granola'
  }
  exerciseRoutine(exercise);

  return function() {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  }
}

function receivesAFunction(callback){
  return callback()
}

function returnsANamedFunction(callback){
  return function namedCallback(){
    callback
  }
}

function returnsAnAnonymousFunction(callback){
  return () => {
    callback
  }
}

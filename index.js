function receivesAFunction(callback){
  return callback()
}

function returnsANamedFunction(){
  return function someFunction(){}
}

function returnsAnAnonymousFunction(){
  return function(){}
}

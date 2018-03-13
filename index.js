function receivesAFunction(callback){
  return callback()
}

function returnsANamedFunction(){
  return function name(){}
}


function returnsAnAnonymousFunction(){
  return function (){}
}

function receivesAFunction(callback) {callback()}

function returnsANamedFunction(name) {
  return function name(){
    return name
  }
}

function returnsAnAnonymousFunction(anon){ return ()=> anon}

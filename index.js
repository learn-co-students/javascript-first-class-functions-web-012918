function receivesAFunction(callback) {
  callback()
}
function returnsANamedFunction(){
  return function hello (){
    console.log("wat")
  }
}
function returnsAnAnonymousFunction(){
  return function(){
    console.log("why")
  }
}

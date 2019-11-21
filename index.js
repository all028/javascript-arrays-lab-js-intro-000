var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  //var copyKittens = [...kittens]
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens

}

/*
function destructivelyRemoveKitten(arrayName){


}


*/

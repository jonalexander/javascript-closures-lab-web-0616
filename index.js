function bumpCounter() {
  var counter = 0

  function addBump() {
    counter += 1
  }
  function getBumps() {
    return counter
  }

  return {
    addBump,
    getBumps
  }
}


function createAnimal(animalType) {

  // return anon function while passing deadlyDevice
  return (deadlyDevice) => {
    return {animalType: animalType, deadlyDevice: deadlyDevice}
  }

  // -- old code, refactored above --
  // return function diabolicalCreature(deadlyDevice) {
  //   return {animalType: animalType, deadlyDevice: deadlyDevice}
  // }

}

var sharkCreator = createAnimal('Shark')
// when executing sharkCreator below, the function returns an anon function that accepts a parameter
// one can now execute sharkCreator and pass the deadlyDevice
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')

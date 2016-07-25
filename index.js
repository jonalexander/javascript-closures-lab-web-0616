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

}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')


var count = 0;

var dogCount = 0;
var birdCount = 0;

function countBirds() {
  var count = 0;
  function counter(){
    count += 1;
    return count + 'birds';
  }
  return counter;
}

function countDogs() {
  count += 1;
  return count + ' dogs';
}

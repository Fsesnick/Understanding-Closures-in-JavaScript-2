
var count = 0;

//var dogCount = 0;
//var birdCount = 0;

function makeBirdCounter() {
  var count = 0;
return  function(){
    count += 1;
    return count + 'birds';
  }
}

function countDogs() {
  count += 1;
  return count + ' dogs';
}

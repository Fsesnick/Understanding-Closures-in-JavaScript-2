/*var birds = 3;

function dogHouse() {
	var dogs = 8;
  //console.log(birds);//3
  //console.log(dogs);//8  
  function showDogs(){
    console.log(dogs);
  }
  return showDogs;
}
  //console.log(birds);//3
  //console.log(dogs);//undefined 
var getDogs = dogHouse();

getDogs; //8
*/
var count = 0;

var dogCount = 0;
var birdCount = 0;

function countBirds() {
  count += 1;
  return count + ' birds';
}

function countDogs() {
  count += 1;
  return count + ' dogs';
}

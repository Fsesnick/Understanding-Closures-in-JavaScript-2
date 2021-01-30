
function makeCounter(substantivo ) {
var count = 0;
return function(){
    count += 1;
    return count + '' + substantivo;
  }
}


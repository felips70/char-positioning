function charPosition(str){
  var lower = str.toLowerCase();
  var noSpaces = lower.replace(/ /g,'');
  var myObj = {};

  for (var i = 0; i < noSpaces.length; i++) {
    if (myObj[noSpaces[i]] === undefined) {
      myObj[noSpaces[i]] = [];
    }
    myObj[noSpaces[i]].push(i);

  }
  return myObj;
}

console.log(charPosition('floor'));
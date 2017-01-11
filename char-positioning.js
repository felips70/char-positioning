function countLetters(str){
  var lower = str.toLowerCase();
  var noSpaces = lower.replace(/ /g,'');
  var myObj = {};

  for (var i = 0; i < noSpaces.length; i++) {
    if (myObj[noSpaces[i]] === undefined) {
      myObj[noSpaces[i]] = 0;
    }
    myObj[noSpaces[i]]++;

  }
  return myObj;
}

console.log(countLetters('Cars are fast'));
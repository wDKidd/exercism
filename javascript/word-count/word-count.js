function wordCounter(theString) {

  var arrayKey = theString.split(" ");

  for (var i = 0; i < arrayKey.length; i++) {
    console.log(arrayKey[i]);
  }
}

module.exports = wordCounter;

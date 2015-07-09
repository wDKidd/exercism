function wordCounter(theString) {

  function splitString(theString) {
    var arrayKey = theString.split(" ");

    for (var i = 0; i < arrayKey.length; i++) {
      console.log(arrayKey[i] + " " + (i + 1));
    }
  }
  splitString(theString)
}

module.exports = wordCounter;

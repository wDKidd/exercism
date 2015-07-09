//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  function isQuestion(i) {

    var uppercase = i.valueOf().toUpperCase(),
      inputValue = i.valueOf();
    if (uppercase == inputValue) {
      isUpper = true;
    }

    var last = i.length - 1,
      uppercase = upperCase(input);
    if (i.charAt(last) == '?' && isUpper == false) {
      return true;
    } else {
      return false;
    }
  }

  function allNumbers(i) {
    isNumbers = parseInt(i);
    if (isNumbers) {
      input = i.toLowerCase()
      return true;
    } else {
      return false;
    }
  }

  function upperCase(i) {
    var uppercase = i.valueOf().toUpperCase(),
      inputValue = i.valueOf();
    if (uppercase == inputValue) {
      return true;
    }
  }

  function onlyCharacters(i) {
    var regexChars = new RegExp('([A-Za-z0-9-]+)', 'i'),
      isEmpty = regexChars.exec(i);
    if (isEmpty != null) {
      return true;
    } else
      return false;
  }

  var uppercase = upperCase(input),
    question = isQuestion(input),
    onlyNumbers = allNumbers(input),
    notEmpty = onlyCharacters(input);

  if (question == true) {
    return 'Sure.';
  } else if (uppercase === true && notEmpty == true) {
    return 'Whoa, chill out!';
  } else if (notEmpty == false) {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  };
};

module.exports = Bob;

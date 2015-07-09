var Bob = function() {};

Bob.prototype.hey = function(input) {

  function question(i) {
    return i.charAt(i.length - 1) == '?' && shouting(i) !== true;
  }

  function shouting(i) {
    return i == i.toUpperCase() && i.toLowerCase() != i;
  }

  function silence(i) {
    return /^\s*$/.test(input);
  }

  if (question(input)) {
    return 'Sure.';
  } else if (shouting(input)) {
    return 'Whoa, chill out!';
  } else if (silence(input)) {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  };
};

module.exports = Bob;

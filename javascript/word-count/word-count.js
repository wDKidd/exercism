'use strict';

var wordCounter = function(input) {
  var counts = {};
  var words = input.match(/\S+/g);

  words.forEach(function(word) {
    function getCount(counts, word) {
      if (counts.hasOwnProperty(word)) {
        return counts[word] = counts[word] + 1;
      } else {
        return counts[word] = 1;
      }
    }

    counts[word] = getCount(counts, word);
  });

  return counts;
};

module.exports = wordCounter;

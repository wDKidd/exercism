"use strict";
module.exports = anagram;

function anagram(word) {
  return {
    matches: matches.bind(this, word)
  };
}

function matches(word, words) {

  words = Array.isArray(words) ? words : [].slice.call(arguments, 1);

  return words.filter(function(candidate) {
    return !sameWord(word, candidate) && isAnagram(word, candidate);
  });
}

function sameWord(word, candidate) {
  //makes sure the words are not the same.
  return word.toLowerCase() === candidate.toLowerCase();
}

function isAnagram(word, candiate) {
  // compares alphbetised words
  return normalize(word) === normalize(candiate);
}

function normalize(string) {
  //puts letters in alphabetical order by:
  //-take string, make lowercase, split into letters, sort, convert to string
  return string.toLowerCase().split("").sort().toString();
}

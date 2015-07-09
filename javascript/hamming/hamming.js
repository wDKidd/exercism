var hamDiff = function(a, b) {
  var strandA = [],
    strandB = [],
    diff = 0;

  if (a.length === b.length) {
    for (var i = 0; i < a.length; i++) {
      strandA.push(a[i]);
      strandB.push(b[i]);
    }

    for (var i = 0; i < strandA.length; i++) {
      if (strandA[i] !== strandB[i]) {
        diff += 1;
      }
    }
    return diff;
  } else {
    throw new Error('DNA strands must be of equal length.');
  }
}

exports.compute = hamDiff;

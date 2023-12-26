function extractValue(arr, key) {
  return arr.reduce(function (acc, nextValue) {
    acc.push(nextValue[key]);
    return acc;
  }, []); //no need to initialize new empty array, simply use second parameter of reduce for []
}

function vowelCount(str) {
  const vowels = "aeiou"; //copied over previous vowel counting code
  strArr = str.split("");
  return strArr.reduce(function (acc, nextValue) {
    let lowerCase = nextValue.toLowerCase(); //lowercasing each letter
    if (vowels.indexOf(lowerCase) !== -1) {
      //setting up vowel search
      if (acc[lowerCase]) {
        acc[lowerCase]++; //increasing count of vowel
      } else {
        acc[lowerCase] = 1;
      }
    }
    return acc;
  }, {}); //using second parameter of reduce to create an empty object
}

function addKeyAndValue(arr, key, value) {
  return arr.reduce(function (acc, next, idx) {
    //next not declared, so it is assigned to first item in array
    acc[idx][key] = value; //updating the accumulator array by adding the key and value to the item at the specified index
    return acc;
  }, arr);
}

function partition(arr, callback) {
  return arr.reduce(
    function (accum, next) {
      if (callback(next)) {
        //if cb is true for nextValue,
        accum[0].push(next); //push to array in index 0
      } else {
        accum[1].push(next); // otherwise, push to array in index 1
      }
      return accum;
    },
    [[], []]
  );
}

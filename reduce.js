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

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
  return arr.reduce(function (acc, next, idx) {
    //next not declared, so it is assigned to first item in array
    acc[idx][key] = value; //updating the accumulator array by adding the key and value to the item at the specified index
    return acc;
  }, arr);
}

/*
Write a function called partition which accepts an array and a callback and returns an array with
 two arrays inside of it. The partition function should run the callback function on each 
 value in the array and if the result of the callback function at that specific value is true, 
 the value should be placed in the first subarray. If the result of the callback function at 
 that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
  return arr.reduce(
    function (accum, next) {
      if (callback) {
      } else {
      }
    },
    [],
    []
  );
}

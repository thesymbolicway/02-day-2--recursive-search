function recursiveSearch(arr, target) {
  if (arr.length === 0) {
    return false;
  } else if (arr.length === 1) {
    return arr[0] === target;
  } else {
    if (arr[0] === target) {
      return true;
    } else {
      return recursiveSearch(arr.slice(1), target);
    }
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution

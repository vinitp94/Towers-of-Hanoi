// addNumbers ---------------------------------------------------------

const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    reader.close();
    return completionCallback(sum);
  }

  reader.question("Enter a number:", function(input) {
    sum += parseInt(input);
    console.log(sum);
    numsLeft--;
    addNumbers(sum, numsLeft, completionCallback);
  });
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// absurdBubbleSort ---------------------------------------------------

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}? `, function(input) {
    if (input === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
  return;
}

function outerBubbleSortLoop(arr, madeSwap) {
  if (madeSwap) {
    innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
  } else {
    reader.close();
    return;
  }
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerLoop) {

  if (i === (arr.length - 1)) {
    outerLoop(arr, madeAnySwaps);
  }

  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
      if (isGreaterThan) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      }
      i++;
      console.log(arr);
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    });
  }
}

// askIfGreaterThan(2, 3, input => console.log(input));
// let a = [1,2,6,3,7,4];
// innerBubbleSortLoop(a, 0, false, outerBubbleSortLoop);

// myBind -------------------------------------------------------------


Function.prototype.myBind = function (context) {

};
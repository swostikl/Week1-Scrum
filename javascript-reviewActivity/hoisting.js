// 1.
function cube(x) {
  return x * x * x;
}

// 2.
function fullName(first, last) {
  return first + " " + last;
}

// 3.
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

// 4.
function sumCubes(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}

// Why does JavaScript output undefined instead of throwing an error in the following code?
// because var message is hoisted and initialized with undefined. Accessing it before assignment gives undefined.
console.log(message);

var message = "Hi there!";

// Why does JavaScript throw an error instead of logging undefined in the following code?
// but let message is hoisted but not initialized. Accessing it before assignment throws a ReferenceError.
console.log(message);

let message = "Hi there!";

// Explain precisely what happens when the following code is executed.
// will throw a ReferenceError because showMessage is a variable holding a function expression. const is hoisted but not initialized.
console.log(showMessage());

const showMessage = function () {
  return "Hi there!";
};

// Why does JavaScript not throw any errors when the following code is executed?
// because showMessage is a function declaration which is hoisted and initialized. It can be called before its definition.
console.log(showMessage());

function showMessage() {
  return "Hi there!";
}

// Restructure the following instances of code to work correctly:
// 1.
let values = [10, 20, 30];
for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}

// 2.
let lastLogin = "1/1/1970";
console.log(welcome("Charlie", "Munger"));

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`;
}
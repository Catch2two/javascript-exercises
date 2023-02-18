const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(array) {
  const ourArray = array;
  let sum = 0;
  for (let i = 0; i < ourArray.length; i += 1) {
    sum += ourArray[i];
  }
  return sum;
};

const multiply = function(array) {
  var sum = 1;
  for (var i = 0; i < array.length; i++) {
    sum = sum * array[i];
  }
    return sum;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

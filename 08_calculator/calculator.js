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

const power = function(base, exponent) {
  var result = 1;
  if(exponent === undefined) {
    exponent = 2;
  }
  for(var i=1; i <= exponent; i++) {
    result = result * base;
  }
  return result;
}

const factorial = function(num) {
	if (num < 0)
  return -1;

  else if (num == 0)
  return 1;

  else {
    return num * factorial(num - 1);
  }
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

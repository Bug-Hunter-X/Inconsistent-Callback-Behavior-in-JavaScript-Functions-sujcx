function foo(a, b) {
  return a + b;
}

function bar(a, b) {
  return a - b;
}

function baz(a, b, callback) {
  if (typeof callback !== 'function') {
    throw new Error('Invalid callback provided');
  }
  return callback(a, b);
}

console.log(baz(5, 2, foo)); // Output: 7
console.log(baz(5, 2, bar)); // Output: 3

// Add more robust error handling
function baz(a, b, callback) {
  if (typeof callback !== 'function') {
      return 'Error: Invalid callback'; 
  } try {
      return callback(a, b);
  } catch (error) {
      return 'Error: ' + error.message;
  }
}
function foo(a, b) {
  return a + b;
}

function bar(a, b) {
  return a - b;
}

function baz(a, b, callback) {
  return callback(a, b);
}

console.log(baz(5, 2, foo)); // Output: 7
console.log(baz(5, 2, bar)); // Output: 3
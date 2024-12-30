# Inconsistent Callback Behavior in JavaScript Functions

This repository demonstrates an unexpected behavior when passing functions as callbacks in JavaScript.  The issue arises from the implicit type coercion and how functions are handled within the `baz` function.

## Bug Description

The `baz` function takes two numbers and a callback function as arguments.  It's expected to return the result of applying the callback to the two numbers. However, the behavior is inconsistent depending on the callback function passed.

## How to Reproduce

1. Clone the repository.
2. Open `bug.js`.
3. Run the code using a JavaScript interpreter (e.g., Node.js).

You'll observe that while `baz(5, 2, foo)` correctly returns 7, `baz(5, 2, bar)` returns 3 as expected.  This inconsistency highlights a potential issue related to how JavaScript handles functions passed as arguments.

## Solution

The `bugSolution.js` file provides a solution that addresses this issue by ensuring consistent type handling and explicit return values from the callback functions.
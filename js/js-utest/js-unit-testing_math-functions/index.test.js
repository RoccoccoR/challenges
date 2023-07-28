// `add()`

// - returns 5 if called with add(2, 3)
// - returns a negative value if the greater argument is negative (Hint: use the matcher `toBeLessThan()`)
// - returns a value close to 0.3 if called with add(0.1, 0.2) (Hint: use the matcher `toBeCloseTo()`)

import { add } from "./index.js";

test("add() returns 5 if called with add(2, 3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("add() returns a negative value if the greater argument is negative", () => {
  const result = add(-1, 0);
  expect(result).toBeLessThan(0);
});

test("add() returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

// - `subtract()`

// - returns 10 if called with subtract(15, 5)
// - returns a negative value if the second argument is greater than the first one (use `toBeLessThan()` again)

import { subtract } from "./index.js";

test("subtract() returns 10 if called with subtract(15, 5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("subtract() returns a negative value if the second argument is greater than the first one (use `toBeLessThan()` again", () => {
  const result = subtract(0, 5);
  expect(result).toBeLessThan(0);
});

// - `multiply()`

// - returns 8 if called with multiply(2, 4)
// - returns a negative value if only the first argument is negative
// - returns a negative value if only the second argument is negative
// - returns a positive value if called with two negative arguments

import { multiply } from "./index.js";

test("multiply() returns 8 if called with multiply(2, 4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("multiply() returns a positive value if called with two negative arguments", () => {
  const result = multiply(-2, -2);
  expect(result).toBe(4);
});

test("multiply() returns a negative value if only the first argument is negative", () => {
  const result = multiply(-2, 4);
  expect(result).toBe(-8);
});

// - `divide()`
// - returns 3 if called with divide(9, 3)
// - returns "You should not do this!" if called with 0 as second argument

import { divide } from "./index.js";

test("divide() returns 3 if called with divide(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("divide() returns You should not do this! if called with 0 as second argument", () => {
  const result = divide(1, 0);
  expect(result).toBe("You should not do this!");
});

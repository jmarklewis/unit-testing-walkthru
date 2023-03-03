//Import our functions from main.js
const { is } = require('@babel/types')
const modules = require('./main')
// console.log(modules)
const isEven = modules.isEven
const divide = modules.divide
const isPositive = modules.isPositive

///This is where all of our test cases belong
//TEST CASE FOR ISEVEN
test("It should return true when called with an even number", () => {
    expect(isEven(4)).toBe(true)
})

// TEST CASE FOR DIVIDE
test("It should return a number  when called", () => {
    //if b is 0, the return value would be infinity. Infinity is still considered a number. This passing the test.
    expect(typeof divide(4, 2)).toBe("number")
})

test("It should return true when passed a positive number and 0", () => {
    //Base case: where a number is true
    expect(isPositive(3)).toBe(true);
    //Edge case consider 0 as true
    expect(isPositive(0)).toBe(true)
});

test("It shoudl return false when passed a negative number.", () => {
    expect(isPositive(-3)).toBe(false)
})
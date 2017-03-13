function fizzBuzz(i) {
  if(typeof i !== "number")
    return "Params should be a number"

  return i % 15 == 0 ? "FizzBuzz" : i % 5 == 0 ? "Buzz" : i % 3 == 0 ? "Fizz" : i
}

console.log(fizzBuzz(24));

module.exports = fizzBuzz

const should = require('chai').should();

let fizzBuzz = require('../fizzbuzz')

console.log(fizzBuzz(15));


describe('Testing Fizz Buzz', function() {
  it('Testing FizzBuzz function 15 should send FizzBuzz', function() {
    fizzBuzz(15).should.equal("FizzBuzz")
  })

  it('Testing FizzBuzz function 24 should send Fizz', function() {
    fizzBuzz(24).should.equal("Fizz")
  })

  it('Testing FizzBuzz function 10 should send Buzz', function() {
    fizzBuzz(10).should.equal("Buzz")
  })


  it('Testing FizzBuzz function 150 should send FizzBuzz', function() {
    fizzBuzz(150).should.equal("FizzBuzz")
  })


  it('Testing FizzBuzz function string should send Params should be a number', function() {
    fizzBuzz("15").should.equal("Params should be a number")
  })

})

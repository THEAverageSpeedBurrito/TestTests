'use strict';

var expect = require('chai').expect;
var main = require('../main.js');

describe('Greeting that incorporates string text', () => {
  it('should accept only one argument', () => {
    expect(main.greeting('Gene')).to.equal('Hello Gene');
  });

  it('should accept only string inputs', () => {
    expect(main.greeting('one')).to.equal('Hello one');
    expect(main.greeting(1)).to.equal('invalid');
  });

  it('should output a string', () => {
    expect(typeof(main.greeting('henry'))).to.equal('string');
    expect(main.greeting('henry')).to.equal('Hello henry');
    expect(main.greeting(100)).to.equal('invalid');
  });
});

describe('Integer representing the sum of all integers in an array', () => {

  it('Input is an array', () => {
    expect(main.reduce([1,2,3])).to.equal(6);
    expect(main.reduce('string')).to.equal('invalid type');
    expect(main.reduce(true)).to.equal('invalid type');
  });

  it('Array only includes numbers', () => {
    expect(main.reduce([1,2,3])).to.equal(6);
    expect(main.reduce([1, 'blue', 3])).to.equal('invalid array');
  });

  it('Proper output is a number', () => {
    expect(main.reduce([1,2,3])).to.equal(6);
    expect(main.reduce([1, 'blue', 3])).to.equal('invalid array');
  });

  it('Output is the sum of all numbers', () => {
    expect(main.reduce([1,3,5])).to.equal(9);
  });

});

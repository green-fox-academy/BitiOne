import * as test from 'tape';
import { Sum } from './sum';

test('Sum the given numbers.', t => {
    const newSum = new Sum();
  
    var actual = newSum.sum([1, 22]);
    var expected = 23;
  
    t.equal(actual, expected);
    t.end();
  });

  test('Sum the given numbers (an empty list).', t => {
    const newSum = new Sum();
  
    var actual = newSum.sum([]);
    var expected = 0;
  
    t.equal(actual, expected);
    t.end();
  });

  test('Sum the given numbers (a list that has one element in it).', t => {
    const newSum = new Sum();
  
    var actual = newSum.sum([22]);
    var expected = 22;
  
    t.equal(actual, expected);
    t.end();
  });

  test('Sum the given numbers (a list that has multiple elements in it).', t => {
    const newSum = new Sum();
  
    var actual = newSum.sum([1, 22, 55, 41, 47]);
    var expected = 166;
  
    t.equal(actual, expected);
    t.end();
  });
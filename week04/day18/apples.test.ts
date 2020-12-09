import * as test from 'tape';
import { Apple } from './apples';

test('add string apple', t => {
    let apple01 = new Apple;
    const actual = apple01.getApple();
    const expected = 'apple';
  
    t.equal(actual, expected);
    t.end();
  });
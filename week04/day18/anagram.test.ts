import * as test from 'tape';
import { anagram } from './anagram';

test('Function anagram get back the truo or false correctly', t => {
    const actual = anagram('Hello', 'Lohle');
    const expected = true;
  
    t.equal(actual, expected);
    t.end();
  });
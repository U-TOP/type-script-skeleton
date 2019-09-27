import * as Debug from "debug";
const debug = Debug("index.test.ts");

import { helloWorld } from '../src/index'; // or import { helloWorld } from '#/index';

test('basic', () => {
  debug('basic');
  expect(helloWorld('John')).toBe('Hello John');
});

// test('Failed', () => {
//   debug('Failed');
//   expect(helloWorld()).toBe('Hello ');
// });
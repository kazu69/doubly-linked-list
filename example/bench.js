const LinkedList = require('../dist/index.js').default
const list = new LinkedList()

let s;
const len = 100000;

let queue = [];

s = Date.now();
for (let i = 0; i < len; i++) { queue.unshift(i); }
console.log(`queue unshift is  ${Date.now() - s} ms`);
s = Date.now();
for (let i = 0; i < len; i++) { queue.shift(i); }
console.log(`queue shift is  ${Date.now() - s} ms`);

console.log(`============`);

s = Date.now();
for (let i = 0; i < len; i++) { list.unshift(i); }
console.log(`list queue unshift is ${Date.now() - s} ms`);
s = Date.now();
for (let i = 0; i < len; i++) { list.shift(i); }
console.log(`list queue shift is  ${Date.now() - s} ms`);

console.log(`============`);

let stack = [];

s = Date.now();
for (let i = 0; i < len; i++) { stack.push(i); }
console.log(`stack push is  ${Date.now() - s} ms`);
s = Date.now();
for (let i = 0; i < len; i++) { stack.shift(i); }
console.log(`stack shift is  ${Date.now() - s} ms`);

console.log(`============`);

s = Date.now();
for (let i = 0; i < len; i++) { list.push(i); }
console.log(`list stack push is ${Date.now() - s} ms`);
s = Date.now();
for (let i = 0; i < len; i++) { list.shift(i); }
console.log(`list stack shift is  ${Date.now() - s} ms`);

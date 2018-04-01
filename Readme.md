## doubly-linked-list

[![Greenkeeper badge](https://badges.greenkeeper.io/kazu69/doubly-linked-list.svg)](https://greenkeeper.io/)

> Doubly  Linked List Structure Object for JavaScript

### Advantages

- Element addition and deletion processing is fast.

### Disadvantages

- In the case of finding a specific element, it searches all elements and is slow.

### Usage

```sh
npm i kazu69/doubly-linked-list#master
```

### property

- head
- tail
- count

### method

- length()
- find(value)
- push(value)
- unshift(value)
- pop()
- shift()
- remove(index)
- append(value, index)
- map(callback)
- drop()
- asArray()
- isEmpty()

### example

```js
const LinkedList = require('../dist/index.js').default
const list = new LinkedList()

list.push(1)
list.push(2)
list.push(3)

console.log(list.length()) // => 3

list.unshift(0)
list.unshift(-1)
list.unshift(-2)

console.log(list.length()) // => 6
console.log(list.asArray()) // => [-2 ,-1, 0, 1, 2, 3]

list.remove(1)
console.log(list.asArray()) // => [ -2, 0, 1, 2, 3 ]

list.append(-1, 0)
console.log(list.asArray()) // => [ -1, -2, 0, 1, 2, 3 ]

list.pop()
list.pop()
list.pop()
console.log(list.asArray()) // => [ -1, -2, 0 ]
// [-2 ,-1, 0]

list.shift()
console.log(list.asArray()) // => [ -2, 0 ]

result = list.map(function(node) { node.value = node.value + 1})
console.log(result) // => [ -1, 1 ]

console.log(list.head) // => -1
console.log(list.tail) // => 1
console.log(list.isEmpty()) // => false

list.drop()

console.log(list.isEmpty()) // => true
```

### Bench spec

See and Execute `bench.js` file.

```sh
node exmaple/bench.js

queue unshift is  4951 ms
queue shift is  7046 ms
============
linked-list queue unshift is 23 ms
linked-list queue shift is  23 ms
============
stack push is  18 ms
stack shift is  7357 ms
============
linked-list stack push is 26 ms
linked-list stack shift is  6 ms
```

### Todo

- [ ] Add Unit Tests

### License

MIT © kazu69

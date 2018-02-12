"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = require("./node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this._count = 0;
    }
    Object.defineProperty(LinkedList.prototype, "head", {
        get: function () {
            return this._head.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkedList.prototype, "tail", {
        get: function () {
            return this._tail.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkedList.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.length = function () {
        return this._count;
    };
    LinkedList.prototype.item = function (index) {
        if (index < 0 || index > this._count) {
            return null;
        }
        if (index === 0) {
            return this._head;
        }
        if (index === this._count) {
            return this._tail;
        }
        var node = this._tail;
        if (node === null) {
            return null;
        }
        var i = this._count - 1;
        while (index < i) {
            node = node.previous;
            i--;
        }
        return node;
    };
    LinkedList.prototype.find = function (value) {
        var node = this._head;
        var found = null;
        var count = this._count;
        while (count >= 0 && node !== null) {
            if (node.value === value) {
                found = node;
                break;
            }
            count--;
            node = node.next;
        }
        return found.value;
    };
    LinkedList.prototype.push = function (value) {
        var node = new node_1.default(value);
        if (this._count === 0) {
            this._head = node;
            this._tail = node;
        }
        else {
            this._tail.next = node;
            node.previous = this._tail;
            this._tail = node;
        }
        this._count++;
        return this._tail.value;
    };
    LinkedList.prototype.unshift = function (value) {
        var node = new node_1.default(value);
        if (this._count === 0) {
            this._head = node;
            this._tail = node;
        }
        else {
            this._head.previous = node;
            node.next = this._head;
            this._head = node;
        }
        this._count++;
        return this._head.value;
    };
    LinkedList.prototype.pop = function () {
        if (this._count === 0 || this._tail === null) {
            return undefined;
        }
        var tail = this._tail;
        this._tail = tail.previous;
        if (this._tail !== null) {
            this._tail.next = null;
        }
        else {
            this._head = null;
        }
        this._count--;
        return tail.value;
    };
    LinkedList.prototype.shift = function () {
        if (this._count === 0 || this._head == null) {
            return undefined;
        }
        var head = this._head;
        this._head = head.next;
        if (this._head !== null) {
            this._head.previous = null;
        }
        else {
            this._tail = null;
        }
        this._count--;
        return this.head.value;
    };
    LinkedList.prototype.remove = function (index) {
        if (index === void 0) { index = 0; }
        if (index < 0 || index > this._count) {
            return false;
        }
        if (index === 0) {
            return this.shift();
        }
        else if (index === this._count) {
            return this.pop();
        }
        else {
            var current = this.item(index);
            if (current === null) {
                return current;
            }
            var next = current.next;
            var previous = current.previous;
            next.previous = previous;
            previous.next = next;
            return current.value;
        }
    };
    LinkedList.prototype.append = function (value, index) {
        if (index === void 0) { index = 0; }
        var node = new node_1.default(value);
        if (index < 0 || index > this._count) {
            return false;
        }
        if (index === 0) {
            this.unshift(node.value);
        }
        else if (index === this._count) {
            this.push(node.value);
        }
        else {
            var current = this.item(index);
            if (current === null) {
                return false;
            }
            var next = current.next;
            current.next = node;
            if (next !== null) {
                next.previous = current;
            }
        }
        return node.value;
    };
    LinkedList.prototype.map = function (cb, thisArg) {
        if (thisArg === void 0) { thisArg = null; }
        var node = this._head;
        var count = this._count;
        while (count >= 0 && node !== null) {
            cb.call(thisArg, node);
            node = node.next;
            count--;
        }
        return this.asArray();
    };
    LinkedList.prototype.drop = function () {
        this.map(function (node) {
            node.next = null;
            node.previous = null;
        });
        this._head = this._tail = null;
        this._count = 0;
        return this.asArray();
    };
    LinkedList.prototype.asArray = function () {
        var arry = [];
        var current = this._head;
        if (current == null) {
            return arry;
        }
        if (this._count === 0) {
            return arry;
        }
        while (current !== null) {
            arry.push(current.value);
            current = current.next;
        }
        return arry;
    };
    LinkedList.prototype.isEmpty = function () {
        return this._count === 0;
    };
    return LinkedList;
}());
exports.default = LinkedList;
//# sourceMappingURL=index.js.map
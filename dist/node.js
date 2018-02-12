"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this._value = value;
        this._next = this._previous = null;
    }
    Object.defineProperty(ListNode.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListNode.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (ListNode) {
            this._next = ListNode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListNode.prototype, "previous", {
        get: function () {
            return this._previous;
        },
        set: function (ListNode) {
            this._previous = ListNode;
        },
        enumerable: true,
        configurable: true
    });
    return ListNode;
}());
exports.default = ListNode;
//# sourceMappingURL=node.js.map
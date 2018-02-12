import { ListNodeInterface } from '../node'

class ListNode implements ListNodeInterface {
    private _value: any
    private _next: null | ListNode
    private _previous: null | ListNode

    constructor(value: any) {
        this._value = value
        this._next = this._previous = null
    }

    set value(value: any) {
        this._value = value
    }

    get value(): any {
        return this._value
    }

    set next(ListNode: ListNode | null) {
        this._next = ListNode
    }

    get next(): ListNode | null {
        return this._next
    }

    set previous(ListNode: ListNode | null) {
        this._previous = ListNode
    }

    get previous(): ListNode | null {
        return this._previous
    }
}

export default ListNode

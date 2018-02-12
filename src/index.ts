import { LinkedListInterface } from '../index'
import ListNode from './node'

class LinkedList implements LinkedListInterface {
    private _head: ListNode | null
    private _tail: ListNode | null
    private _count: number

    constructor() {
        this._count = 0
    }

    get head(): any {
        return this._head.value;
    }

    get tail(): any {
        return this._tail.value;
    }

    get count(): number {
        return this._count;
    }

    public length(): number {
        return this._count;
    }

    private item(index: number): ListNode | null {
        if (index < 0 || index > this._count) {
            return null
        }

        if (index === 0) {
            return this._head
        }

        if (index === this._count) {
            return this._tail
        }

        let node: ListNode | null = this._tail

        if (node === null) {
            return null
        }

        let i = this._count - 1
        while (index < i) {
            node = node.previous
            i--
        }

        return node
    }

    public find<T>(value: T): any {
        let node = this._head
        let found = null
        let count = this._count

        while (count >= 0 && node !== null) {
            if (node.value === value) {
                found = node
                break
            }
            count--
            node = node.next
        }

        return found.value
    }

    public push<T>(value: T): T {
        const node = new ListNode(value)

        if (this._count === 0) {
            this._head = node
            this._tail = node
        } else {
            this._tail.next = node
            node.previous = this._tail
            this._tail = node
        }

        this._count++

        return this._tail.value
    }

    public unshift<T>(value: T): T {
        const node: ListNode = new ListNode(value)

        if (this._count === 0) {
            this._head = node
            this._tail = node
        } else {
            this._head.previous = node
            node.next = this._head
            this._head = node
        }

        this._count++

        return this._head.value
    }

    public pop(): any {
        if (this._count === 0 || this._tail === null) {
            return undefined
        }

        const tail: ListNode = this._tail
        this._tail = tail.previous
        if (this._tail !== null) {
            this._tail.next = null
        } else {
            this._head = null
        }
        this._count--

        return tail.value
    }

    public shift(): any {
        if (this._count === 0 || this._head == null) {
            return undefined
        }

        const head: ListNode = this._head
        this._head = head.next
        if (this._head !== null) {
            this._head.previous = null
        } else {
            this._tail = null
        }
        this._count--

        return this.head.value
    }

    public remove(index: number = 0): any {
        if (index < 0 || index > this._count) {
            return false
        }

        if (index === 0) {
            return this.shift()
        } else if (index === this._count) {
            return this.pop()
        } else {
            const current: ListNode = this.item(index)

            if (current === null) {
                return current
            }

            const next = current.next
            const previous = current.previous


            next.previous = previous
            previous.next = next

            return current.value
        }
    }

    public append(value: any, index: number = 0): any {
        const node: ListNode = new ListNode(value)

        if (index < 0 || index > this._count) {
            return false
        }

        if (index === 0) {
            this.unshift(node.value)
        } else if (index === this._count) {
            this.push(node.value)
        } else {
            const current: ListNode | null = this.item(index)
            if (current === null) {
                return false
            }

            const next = current.next
            current.next = node
            if (next !== null) {
                next.previous = current
            }
        }

        return node.value
    }

    public map(cb: Function, thisArg: any = null): Array<any> {
        let node: ListNode | null = this._head
        let count: number = this._count

        while (count >= 0 && node !== null) {
            cb.call(thisArg, node)
            node = node.next
            count--
        }

        return this.asArray()
    }

    public drop(): Array<any> {
        this.map((node: ListNode) => {
            node.next = null
            node.previous = null
        })
        this._head = this._tail = null
        this._count = 0
        return this.asArray()
    }

    public asArray(): Array<any> {
        const arry: any[] = []
        let current: ListNode | null = this._head

        if (current == null) {
            return arry
        }

        if (this._count === 0) {
            return arry
        }

        while (current !== null) {
            arry.push(current.value)
            current = current.next
        }

        return arry
    }

    public isEmpty(): boolean {
        return this._count === 0
    }
}

export default LinkedList;

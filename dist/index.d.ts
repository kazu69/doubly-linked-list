import { LinkedListInterface } from '../index';
declare class LinkedList implements LinkedListInterface {
    private _head;
    private _tail;
    private _count;
    constructor();
    readonly head: any;
    readonly tail: any;
    readonly count: number;
    length(): number;
    private item(index);
    find<T>(value: T): any;
    push<T>(value: T): T;
    unshift<T>(value: T): T;
    pop(): any;
    shift(): any;
    remove(index?: number): any;
    append(value: any, index?: number): any;
    map(cb: Function, thisArg?: any): Array<any>;
    drop(): Array<any>;
    asArray(): Array<any>;
    isEmpty(): boolean;
}
export default LinkedList;

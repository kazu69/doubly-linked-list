import { ListNodeInterface } from '../node';
declare class ListNode implements ListNodeInterface {
    private _value;
    private _next;
    private _previous;
    constructor(value: any);
    value: any;
    next: ListNode | null;
    previous: ListNode | null;
}
export default ListNode;

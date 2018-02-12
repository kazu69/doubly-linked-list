import { ListNodeInterface } from './node'

export interface LinkedListInterface {
    head: ListNodeInterface | null;
    tail: ListNodeInterface | null;
    count: number;
    length(): number;
}

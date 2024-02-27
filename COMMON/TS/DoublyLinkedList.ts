class DoublyLinkedListNode<T> {
    data: T;
    prev: DoublyLinkedListNode<T> | null;
    next: DoublyLinkedListNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList<T> {
    head: DoublyLinkedListNode<T> | null;
    tail: DoublyLinkedListNode<T> | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    prepend(data: T): void {
        const newNode = new DoublyLinkedListNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    append(data: T): void {
        const newNode = new DoublyLinkedListNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else if (this.tail != null) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    find(data: T): DoublyLinkedListNode<T> | null {
        let current = this.head;
        while (current) {
            if (current.data === data) return current;
            current = current.next;
        }
        return null;
    }

    remove(data: T): boolean {
        let current = this.head;

        while (current) {
            if (current.data === data) {
                if (current.prev) current.prev.next = current.next;
                if (current.next) current.next.prev = current.prev;
                if (current === this.head) this.head = current.next;
                if (current === this.tail) this.tail = current.prev;
                this.length--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    update(oldData: T, newData: T): boolean {
        let current = this.find(oldData);
        if (current) {
            current.data = newData;
            return true;
        }
        return false;
    }

    getLength(): number {
        return this.length;
    }
}

export default DoublyLinkedList;

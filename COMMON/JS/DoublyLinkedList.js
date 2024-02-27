class DoublyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Вставка в начало списка
    prepend(data) {
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

    // Вставка в конец списка
    append(data) {
        const newNode = new DoublyLinkedListNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    // Поиск элемента по значению
    find(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) return current;
            current = current.next;
        }
        return null;
    }

    // Удаление элемента по значению
    remove(data) {
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

    // Изменение значения элемента
    update(oldData, newData) {
        let current = this.find(oldData);
        if (current) {
            current.data = newData;
            return true;
        }
        return false;
    }

    // Получение длины списка
    getLength() {
        return this.length;
    }
}

module.exports = DoublyLinkedList;
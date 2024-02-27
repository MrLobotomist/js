const DoublyLinkedList = require('./DoublyLinkedList');

describe('DoublyLinkedList', () => {
    let list;

    beforeEach(() => {
        list = new DoublyLinkedList();
    });

    test('append and getLength', () => {
        list.append(1);
        list.append(2);
        expect(list.getLength()).toBe(2);
    });

    test('prepend', () => {
        list.append(1);
        list.append(2);
        list.prepend(3);
        expect(list.head.data).toBe(3);
        expect(list.find(1).next).toBe(list.tail);
    });

    test('find', () => {
        list.append(1);
        list.append(2);
        expect(list.find(2).data).toBe(2);
    });

    test('remove', () => {
        list.append(1);
        list.append(2);
        list.remove(1);
        expect(list.getLength()).toBe(1);
        expect(list.find(1)).toBeNull();
    });

    test('update', () => {
        list.append(1);
        list.append(2);
        list.update(2, 3);
        expect(list.find(2)).toBeNull();
        expect(list.find(3).data).toBe(3);
    });
});

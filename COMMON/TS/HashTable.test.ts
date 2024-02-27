import HashTable from "./HashTable";

describe('HashTable', () => {
    let hashTable = new HashTable();

    beforeEach(() => {
        hashTable = new HashTable();
    });

    test('set & get methods', () => {
        hashTable.set('test', 1);
        expect(hashTable.get('test')).toBe(1);
    });

    test('update method', () => {
        hashTable.set('test', 1);
        hashTable.update('test', 2);
        expect(hashTable.get('test')).toBe(2);
    });

    test('count method', () => {
        expect(hashTable.count()).toBe(0);
        hashTable.set('test1', 1);
        hashTable.set('test2', 2);
        expect(hashTable.count()).toBe(2);
    });

    test('remove method', () => {
        hashTable.set('test', 1);
        expect(hashTable.remove('test')).toBe(true);
        expect(hashTable.get('test')).toBe(null);
    });

    test('remove method should return false if key does not exist', () => {
        expect(hashTable.remove('test')).toBe(false);
    });

    test('hash method', () => {
        const key = 'test key';
        const hash = hashTable.hash(key);
        expect(hash).toBeGreaterThanOrEqual(0);
        expect(hash).toBeLessThan(hashTable.size);
    });
});
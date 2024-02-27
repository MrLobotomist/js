// Определяем тип для хранения в бакете: массив пар [ключ, значение]
type Bucket<K, V> = Array<[K, V]>;

class HashTable<K, V> {
    private buckets: Array<Bucket<K, V> | undefined>;
    public size: number;

    constructor(size: number = 20) {
        this.buckets = new Array<Bucket<K, V> | undefined>(size);
        this.size = size;
    }

    // Метод hash теперь принимает ключ типа K
    public hash(key: K): number {
        let hash = 0;
        const stringKey = String(key); // Преобразуем ключ в строку для универсальности
        for (let char of stringKey) {
            hash = (hash + char.charCodeAt(0)) % this.size;
        }
        return hash;
    }

    // Метод set принимает ключ типа K и значение типа V
    public set(key: K, value: V): void {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        const existing = this.buckets[index]!.find((item) => item[0] === key);
        if (existing) {
            existing[1] = value;
        } else {
            this.buckets[index]!.push([key, value]);
        }
    }

    // Метод get возвращает значение типа V или null
    public get(key: K): V | null {
        const index = this.hash(key);
        if (!this.buckets[index]) return null;
        const item = this.buckets[index]!.find((item) => item[0] === key);
        return item ? item[1] : null;
    }

    // Метод remove возвращает boolean
    public remove(key: K): boolean {
        const index = this.hash(key);
        if (!this.buckets[index]) return false;
        const itemIndex = this.buckets[index]!.findIndex((item) => item[0] === key);
        if (itemIndex === -1) return false;
        this.buckets[index]!.splice(itemIndex, 1);
        return true;
    }

    // Метод update использует set для обновления значения
    public update(key: K, value: V): void {
        this.set(key, value);
    }

    // Метод count возвращает общее количество элементов
    public count(): number {
        let count = 0;
        for (let bucket of this.buckets) {
            if (bucket) {
                count += bucket.length;
            }
        }
        return count;
    }
}

export default HashTable;

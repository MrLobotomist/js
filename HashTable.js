class HashTable {
    constructor(size = 20) {
        this.buckets = new Array(size);
        this.size = size;
    }

    hash(key) {
        let hash = 0;
        for (let char of key) {
            hash = (hash + char.charCodeAt(0)) % this.size;
        }
        return hash;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        const existing = this.buckets[index].find((item) => item[0] === key);
        if (existing) {
            existing[1] = value;
        } else {
            this.buckets[index].push([key, value]);
        }
    }

    get(key) {
        const index = this.hash(key);
        if (!this.buckets[index]) return null;
        const item = this.buckets[index].find((item) => item[0] === key);
        return item ? item[1] : null;
    }

    remove(key) {
        const index = this.hash(key);
        if (!this.buckets[index]) return false;
        const itemIndex = this.buckets[index].findIndex((item) => item[0] === key);
        if (itemIndex === -1) return false;
        this.buckets[index].splice(itemIndex, 1);
        return true;
    }

    update(key, value) {
        return this.set(key, value);
    }

    count() {
        let count = 0;
        for (let bucket of this.buckets) {
            if (bucket) {
                count += bucket.length;
            }
        }
        return count;
    }
}

module.exports = HashTable;
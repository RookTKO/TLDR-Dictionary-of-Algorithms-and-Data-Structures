const hash = (key, size) => {
    let hashedKey = 0;

    for (let i; i < key.length; i++) {
        hashedKey = key.charCodeAt(i);
    }

    return hashedKey % size;
}


class HashTable {
    constructor() {
        this.size = 20;
        this.buckets = Array(this.size);

        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new Map();
        }
    }

    insert(key, value) {
        let indx = hash(key, this.size);
        this.buckets[indx].set(key, value);
    }

    remove(key) {
        let indx = hash(key, this.size);
        let deleted = this.buckets[indx].get(key);
        this.buckets[indx].delete(key);
        return deleted;
    }

    search(key) {
        let indx = hash(key, this.size);
        return this.buckets[indx].get(key);
    }

}

const hashTable = new HashTable();

hashTable.insert('pikachu', 'electric type');
hashTable.insert('squirtle', 'water type');
hashTable.insert('bulbasaur', 'grass type');
hashTable.insert('charmander', 'fire type');
hashTable.insert('eevee', 'normal type');

console.log(hashTable);
console.log(hashTable.search('squirtle'));
console.log(hashTable.search('pikachu'));
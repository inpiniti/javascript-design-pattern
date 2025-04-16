class Iterator {
    constructor(collection) {
        this.collection = collection;
        this.index = 0;
    }

    next() {
        if (this.index < this.collection.length) {
            return { value: this.collection[this.index++], done: false };
        } else {
            return { done: true };
        }
    }

    hasNext() {
        return this.index < this.collection.length;
    }
}

// Example usage:
const collection = ['item1', 'item2', 'item3'];
const iterator = new Iterator(collection);

while (iterator.hasNext()) {
    console.log(iterator.next().value);
}
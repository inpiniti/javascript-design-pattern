# Iterator Pattern

The Iterator pattern is a behavioral design pattern that provides a way to access the elements of a collection sequentially without exposing its underlying representation. This pattern is particularly useful when you want to traverse a collection of objects without needing to understand the details of how the collection is structured.

## Purpose

The main purpose of the Iterator pattern is to provide a standard way to traverse a collection of objects. It allows for the separation of the collection's internal structure from the way it is accessed, enabling different types of collections to be traversed in a uniform manner.

## Usage

The Iterator pattern is commonly used in scenarios where you need to iterate over a collection of objects, such as lists, arrays, or any other data structure. It is particularly useful when the collection can change dynamically, and you want to provide a consistent way to access its elements.

## Example Code

Here is a simple example of the Iterator pattern in JavaScript:

```javascript
class Iterator {
    constructor(collection) {
        this.collection = collection;
        this.index = 0;
    }

    next() {
        return this.index < this.collection.length ?
            { value: this.collection[this.index++], done: false } :
            { done: true };
    }

    hasNext() {
        return this.index < this.collection.length;
    }
}

// Usage
const collection = ['item1', 'item2', 'item3'];
const iterator = new Iterator(collection);

while (iterator.hasNext()) {
    console.log(iterator.next().value);
}
```

In this example, the `Iterator` class allows you to traverse a collection of items. The `next` method returns the next item in the collection, while the `hasNext` method checks if there are more items to iterate over.
# Flyweight Pattern

## Purpose
The Flyweight pattern is a structural design pattern that aims to minimize memory usage by sharing common parts of state between multiple objects. It is particularly useful when dealing with a large number of similar objects, allowing for efficient memory management.

## Usage
The Flyweight pattern is used when:
- You need to create a large number of similar objects.
- The cost of storing the state of each object is high.
- You want to share common state among objects to save memory.

## Example Code
```javascript
// Flyweight class
class Flyweight {
    constructor(sharedState) {
        this.sharedState = sharedState;
    }

    operation(uniqueState) {
        console.log(`Flyweight: Displaying shared (${this.sharedState}) and unique (${uniqueState}) state.`);
    }
}

// Flyweight Factory
class FlyweightFactory {
    constructor() {
        this.flyweights = {};
    }

    getFlyweight(sharedState) {
        if (!this.flyweights[sharedState]) {
            this.flyweights[sharedState] = new Flyweight(sharedState);
        }
        return this.flyweights[sharedState];
    }

    getCount() {
        return Object.keys(this.flyweights).length;
    }
}

// Client code
const factory = new FlyweightFactory();

const flyweight1 = factory.getFlyweight('sharedState1');
flyweight1.operation('uniqueState1');

const flyweight2 = factory.getFlyweight('sharedState1');
flyweight2.operation('uniqueState2');

console.log(`FlyweightFactory: I have ${factory.getCount()} flyweights.`);
```

In this example, the `Flyweight` class represents the shared state, while the `FlyweightFactory` manages the creation and sharing of `Flyweight` instances. The client code demonstrates how to use the factory to obtain shared flyweights and perform operations with both shared and unique states.
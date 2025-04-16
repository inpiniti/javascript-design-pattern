// This file implements the Flyweight pattern, minimizing memory usage by sharing common parts of state.

class Flyweight {
    constructor(sharedState) {
        this.sharedState = sharedState;
    }

    operation(uniqueState) {
        console.log(`Flyweight: Displaying shared (${this.sharedState}) and unique (${uniqueState}) state.`);
    }
}

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

    getFlyweightCount() {
        return Object.keys(this.flyweights).length;
    }
}

// Example usage
const factory = new FlyweightFactory();

const flyweight1 = factory.getFlyweight('sharedState1');
flyweight1.operation('uniqueState1');

const flyweight2 = factory.getFlyweight('sharedState1');
flyweight2.operation('uniqueState2');

console.log(`Total flyweights: ${factory.getFlyweightCount()}`);
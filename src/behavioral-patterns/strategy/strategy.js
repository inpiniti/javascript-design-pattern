// This file implements the Strategy pattern, defining a family of algorithms and encapsulating them.

class Strategy {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(data) {
        return this.strategy.execute(data);
    }
}

// Example strategies
class ConcreteStrategyA {
    execute(data) {
        return `Strategy A executed with data: ${data}`;
    }
}

class ConcreteStrategyB {
    execute(data) {
        return `Strategy B executed with data: ${data}`;
    }
}

// Usage
const strategyA = new ConcreteStrategyA();
const strategyB = new ConcreteStrategyB();

const context = new Strategy(strategyA);
console.log(context.executeStrategy("some data")); // Output: Strategy A executed with data: some data

context.setStrategy(strategyB);
console.log(context.executeStrategy("some data")); // Output: Strategy B executed with data: some data
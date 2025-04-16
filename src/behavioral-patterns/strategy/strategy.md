# Strategy Pattern

The Strategy pattern is a behavioral design pattern that enables selecting an algorithm's behavior at runtime. It defines a family of algorithms, encapsulates each one, and makes them interchangeable. This pattern allows the algorithm to vary independently from clients that use it.

## Purpose

The main purpose of the Strategy pattern is to enable a client to choose an algorithm from a family of algorithms at runtime. This promotes the Open/Closed Principle, allowing new strategies to be added without modifying existing code.

## Usage

The Strategy pattern is useful when:

- You have multiple algorithms for a specific task and want to switch between them dynamically.
- You want to avoid using conditional statements to select an algorithm.
- You want to encapsulate algorithms in separate classes, making them easier to manage and extend.

## Example Code

```javascript
// Strategy Interface
class Strategy {
    execute(a, b) {
        throw new Error("This method should be overridden!");
    }
}

// Concrete Strategies
class ConcreteStrategyAdd extends Strategy {
    execute(a, b) {
        return a + b;
    }
}

class ConcreteStrategySubtract extends Strategy {
    execute(a, b) {
        return a - b;
    }
}

// Context
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(a, b) {
        return this.strategy.execute(a, b);
    }
}

// Client Code
const context = new Context(new ConcreteStrategyAdd());
console.log(context.executeStrategy(5, 3)); // Output: 8

context.setStrategy(new ConcreteStrategySubtract());
console.log(context.executeStrategy(5, 3)); // Output: 2
```

In this example, the `Context` class uses a `Strategy` to perform operations. The client can switch between different strategies (`ConcreteStrategyAdd` and `ConcreteStrategySubtract`) at runtime, demonstrating the flexibility of the Strategy pattern.
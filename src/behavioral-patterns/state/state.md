# State Pattern

The State pattern is a behavioral design pattern that allows an object to alter its behavior when its internal state changes. This pattern is particularly useful when an object needs to exhibit different behaviors in different states, making the code more manageable and easier to understand.

## Purpose

The State pattern encapsulates state-specific behavior in separate classes, allowing the object to change its behavior dynamically based on its current state. This leads to cleaner code and adheres to the Single Responsibility Principle, as each state class is responsible for its own behavior.

## Usage

The State pattern is commonly used in scenarios where an object can be in multiple states, and its behavior changes based on its current state. Examples include:

- A media player that can be in states like Playing, Paused, or Stopped.
- A document editor that can be in states like Editing, Read-Only, or Locked.

## Example Code

```javascript
// state.js

class State {
    handle(context) {
        throw new Error("This method should be overridden!");
    }
}

class ConcreteStateA extends State {
    handle(context) {
        console.log("Handling request in ConcreteStateA");
        context.setState(new ConcreteStateB());
    }
}

class ConcreteStateB extends State {
    handle(context) {
        console.log("Handling request in ConcreteStateB");
        context.setState(new ConcreteStateA());
    }
}

class Context {
    constructor() {
        this.state = new ConcreteStateA();
    }

    setState(state) {
        this.state = state;
    }

    request() {
        this.state.handle(this);
    }
}

// Usage
const context = new Context();
context.request(); // Handling request in ConcreteStateA
context.request(); // Handling request in ConcreteStateB
```

In this example, the `Context` class maintains a reference to a `State` object and delegates state-specific behavior to it. The `ConcreteStateA` and `ConcreteStateB` classes implement the behavior for their respective states. The `request` method in the `Context` class triggers the state-specific behavior and transitions to the next state.
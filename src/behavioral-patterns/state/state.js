// This file contains the implementation of the State pattern, allowing an object to alter its behavior when its internal state changes.

class Context {
    constructor(state) {
        this.state = state;
    }

    setState(state) {
        this.state = state;
    }

    request() {
        this.state.handle(this);
    }
}

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

// Example usage
const context = new Context(new ConcreteStateA());
context.request(); // Handling request in ConcreteStateA
context.request(); // Handling request in ConcreteStateB
context.request(); // Handling request in ConcreteStateA
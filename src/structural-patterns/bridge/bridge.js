// This file implements the Bridge pattern, separating abstraction from implementation.

class Abstraction {
    constructor(implementor) {
        this.implementor = implementor;
    }

    operation() {
        return this.implementor.operationImplementation();
    }
}

class Implementor {
    operationImplementation() {
        throw new Error("This method should be overridden.");
    }
}

class ConcreteImplementorA extends Implementor {
    operationImplementation() {
        return "ConcreteImplementorA: Implementation";
    }
}

class ConcreteImplementorB extends Implementor {
    operationImplementation() {
        return "ConcreteImplementorB: Implementation";
    }
}

// Usage
const implementorA = new ConcreteImplementorA();
const implementorB = new ConcreteImplementorB();

const abstractionA = new Abstraction(implementorA);
const abstractionB = new Abstraction(implementorB);

console.log(abstractionA.operation()); // ConcreteImplementorA: Implementation
console.log(abstractionB.operation()); // ConcreteImplementorB: Implementation
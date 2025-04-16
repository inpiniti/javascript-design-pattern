// This file implements the Visitor pattern, allowing operations to be performed on elements of an object structure.

class Visitor {
    visit(element) {
        // Default visit method
        console.log(`Visiting ${element.constructor.name}`);
    }
}

class Element {
    accept(visitor) {
        visitor.visit(this);
    }
}

class ConcreteElementA extends Element {
    accept(visitor) {
        visitor.visit(this);
    }
}

class ConcreteElementB extends Element {
    accept(visitor) {
        visitor.visit(this);
    }
}

// Example usage
const visitor = new Visitor();
const elementA = new ConcreteElementA();
const elementB = new ConcreteElementB();

elementA.accept(visitor); // Visiting ConcreteElementA
elementB.accept(visitor); // Visiting ConcreteElementB
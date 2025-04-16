# Visitor Pattern

The Visitor pattern is a behavioral design pattern that allows you to separate an algorithm from the object structure on which it operates. This pattern is particularly useful when you need to perform operations on a set of objects with different types, and you want to avoid modifying the classes of those objects.

## Purpose

The main purpose of the Visitor pattern is to enable adding new operations to existing object structures without modifying their classes. This is achieved by creating a visitor class that implements the operations, and the objects accept the visitor, allowing it to perform the operations on them.

## Usage

The Visitor pattern is commonly used in scenarios where you have a complex object structure, such as a composite structure, and you want to perform various operations on the elements of that structure. It promotes the open/closed principle, allowing you to extend functionality without altering existing code.

## Example Code

```javascript
// visitor.js

class Visitor {
    visitConcreteElementA(element) {
        console.log(`Visiting ${element.name}`);
    }

    visitConcreteElementB(element) {
        console.log(`Visiting ${element.name}`);
    }
}

class ConcreteElementA {
    constructor(name) {
        this.name = name;
    }

    accept(visitor) {
        visitor.visitConcreteElementA(this);
    }
}

class ConcreteElementB {
    constructor(name) {
        this.name = name;
    }

    accept(visitor) {
        visitor.visitConcreteElementB(this);
    }
}

// Usage
const elements = [new ConcreteElementA('Element A'), new ConcreteElementB('Element B')];
const visitor = new Visitor();

elements.forEach(element => {
    element.accept(visitor);
});
```

In this example, the `Visitor` class defines operations for different types of elements. Each concrete element class implements an `accept` method that takes a visitor as an argument, allowing the visitor to perform its operation on the element.
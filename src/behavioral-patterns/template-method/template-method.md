# Template Method Pattern

The Template Method pattern defines the skeleton of an algorithm in a method, deferring some steps to subclasses. This pattern lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.

## Purpose

The Template Method pattern is used to define a framework for an algorithm, allowing subclasses to provide specific implementations for certain steps. This promotes code reuse and helps to adhere to the DRY (Don't Repeat Yourself) principle.

## Usage

1. **Define the Template Method**: Create a method that outlines the steps of the algorithm.
2. **Implement Steps in Subclasses**: Subclasses can override specific steps of the algorithm without changing its overall structure.

## Example Code

```javascript
// template-method.js

class AbstractClass {
    templateMethod() {
        this.stepOne();
        this.stepTwo();
        this.stepThree();
    }

    stepOne() {
        console.log('Step One: Default Implementation');
    }

    stepTwo() {
        console.log('Step Two: Default Implementation');
    }

    stepThree() {
        console.log('Step Three: Default Implementation');
    }
}

class ConcreteClassA extends AbstractClass {
    stepOne() {
        console.log('ConcreteClassA: Step One Implementation');
    }
}

class ConcreteClassB extends AbstractClass {
    stepThree() {
        console.log('ConcreteClassB: Step Three Implementation');
    }
}

// Usage
const instanceA = new ConcreteClassA();
instanceA.templateMethod();

const instanceB = new ConcreteClassB();
instanceB.templateMethod();
```

In this example, `AbstractClass` defines the template method `templateMethod`, which calls the steps of the algorithm. `ConcreteClassA` and `ConcreteClassB` provide specific implementations for some of the steps, demonstrating how the Template Method pattern allows for flexibility while maintaining a consistent algorithm structure.
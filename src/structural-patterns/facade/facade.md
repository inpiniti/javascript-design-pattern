# Facade Pattern

The Facade pattern is a structural design pattern that provides a simplified interface to a complex subsystem. It acts as a bridge between the client and the complex system, making it easier to interact with the system without needing to understand its intricacies.

## Purpose

The main purpose of the Facade pattern is to reduce the complexity of interactions with a system by providing a higher-level interface. This can help in making the system easier to use and understand, especially for clients that do not need to know the details of the subsystem.

## Usage

The Facade pattern is commonly used when:

- A system is complex and has many interdependent classes.
- You want to provide a simple interface to a complex subsystem.
- You want to decouple a client from the subsystem, allowing for easier maintenance and flexibility.

## Example Code

```javascript
// Example of Facade Pattern

class SubsystemA {
    operationA() {
        return 'Subsystem A: Ready!';
    }
}

class SubsystemB {
    operationB() {
        return 'Subsystem B: Get ready!';
    }
}

class SubsystemC {
    operationC() {
        return 'Subsystem C: Fire!';
    }
}

class Facade {
    constructor() {
        this.subsystemA = new SubsystemA();
        this.subsystemB = new SubsystemB();
        this.subsystemC = new SubsystemC();
    }

    operation() {
        const results = [];
        results.push(this.subsystemA.operationA());
        results.push(this.subsystemB.operationB());
        results.push(this.subsystemC.operationC());
        return results.join('\n');
    }
}

// Client code
const facade = new Facade();
console.log(facade.operation());
```

In this example, the `Facade` class provides a simple interface to the complex operations of `SubsystemA`, `SubsystemB`, and `SubsystemC`. The client can interact with the facade without needing to understand the details of each subsystem.
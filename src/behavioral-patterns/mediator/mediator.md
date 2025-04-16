# Mediator Pattern

The Mediator pattern is a behavioral design pattern that encapsulates how a set of objects interact. It promotes loose coupling by preventing objects from referring to each other explicitly, allowing for easier maintenance and scalability.

## Purpose

The primary purpose of the Mediator pattern is to reduce the complexity of communication between multiple objects or components. Instead of having objects communicate directly with each other, they communicate through a mediator object, which handles the interactions.

## Usage

The Mediator pattern is useful in scenarios where you have a complex set of interactions between multiple objects. By using a mediator, you can simplify the communication process and make the system more manageable.

## Example Code

```javascript
// mediator.js

class Mediator {
    constructor() {
        this.colleagues = [];
    }

    register(colleague) {
        this.colleagues.push(colleague);
        colleague.setMediator(this);
    }

    send(message, sender) {
        for (const colleague of this.colleagues) {
            if (colleague !== sender) {
                colleague.receive(message);
            }
        }
    }
}

class Colleague {
    constructor(name) {
        this.name = name;
    }

    setMediator(mediator) {
        this.mediator = mediator;
    }

    send(message) {
        console.log(`${this.name} sends: ${message}`);
        this.mediator.send(message, this);
    }

    receive(message) {
        console.log(`${this.name} receives: ${message}`);
    }
}

// Usage
const mediator = new Mediator();
const colleague1 = new Colleague('Colleague 1');
const colleague2 = new Colleague('Colleague 2');

mediator.register(colleague1);
mediator.register(colleague2);

colleague1.send('Hello, Colleague 2!');
```

In this example, the `Mediator` class manages the communication between `Colleague` objects. When one colleague sends a message, the mediator forwards it to all other colleagues, promoting loose coupling and simplifying interactions.
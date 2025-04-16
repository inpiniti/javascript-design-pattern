// This file implements the Mediator pattern, encapsulating how a set of objects interact.

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
            // Don't notify the sender
            if (colleague !== sender) {
                colleague.receive(message);
            }
        }
    }
}

class Colleague {
    constructor(name) {
        this.name = name;
        this.mediator = null;
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

// Example usage
const mediator = new Mediator();

const colleague1 = new Colleague('Colleague 1');
const colleague2 = new Colleague('Colleague 2');

mediator.register(colleague1);
mediator.register(colleague2);

colleague1.send('Hello, Colleague 2!');
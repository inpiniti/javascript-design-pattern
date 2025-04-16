# Chain of Responsibility Pattern

## Purpose
The Chain of Responsibility pattern is a behavioral design pattern that allows an object to send a request to a chain of potential handlers. Each handler decides either to process the request or to pass it to the next handler in the chain. This pattern promotes loose coupling by allowing multiple objects to handle a request without the sender needing to know which object will ultimately handle it.

## Usage
This pattern is particularly useful when you have multiple handlers that can process a request, and you want to decouple the sender from the receiver. It can be used in scenarios such as event handling systems, logging frameworks, and more.

## Example Code
```javascript
// Handler class
class Handler {
    constructor(successor) {
        this.successor = successor;
    }

    handleRequest(request) {
        if (this.successor) {
            this.successor.handleRequest(request);
        }
    }
}

// Concrete handlers
class ConcreteHandlerA extends Handler {
    handleRequest(request) {
        if (request === 'A') {
            console.log('Handler A processed request A');
        } else {
            super.handleRequest(request);
        }
    }
}

class ConcreteHandlerB extends Handler {
    handleRequest(request) {
        if (request === 'B') {
            console.log('Handler B processed request B');
        } else {
            super.handleRequest(request);
        }
    }
}

// Client code
const handlerB = new ConcreteHandlerB(null);
const handlerA = new ConcreteHandlerA(handlerB);

handlerA.handleRequest('A'); // Output: Handler A processed request A
handlerA.handleRequest('B'); // Output: Handler B processed request B
handlerA.handleRequest('C'); // No output, request not handled
```

This example demonstrates how requests can be processed by different handlers in a chain, allowing for flexible request handling.
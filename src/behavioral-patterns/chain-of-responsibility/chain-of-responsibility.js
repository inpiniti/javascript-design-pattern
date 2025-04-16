// This file implements the Chain of Responsibility pattern, allowing multiple objects to handle a request.

class Handler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class ConcreteHandlerA extends Handler {
    handle(request) {
        if (request === 'A') {
            return `Handler A handled request: ${request}`;
        }
        return super.handle(request);
    }
}

class ConcreteHandlerB extends Handler {
    handle(request) {
        if (request === 'B') {
            return `Handler B handled request: ${request}`;
        }
        return super.handle(request);
    }
}

class ConcreteHandlerC extends Handler {
    handle(request) {
        if (request === 'C') {
            return `Handler C handled request: ${request}`;
        }
        return super.handle(request);
    }
}

// Client code
const handlerA = new ConcreteHandlerA();
const handlerB = new ConcreteHandlerB();
const handlerC = new ConcreteHandlerC();

handlerA.setNext(handlerB).setNext(handlerC);

console.log(handlerA.handle('A')); // Handler A handled request: A
console.log(handlerA.handle('B')); // Handler B handled request: B
console.log(handlerA.handle('C')); // Handler C handled request: C
console.log(handlerA.handle('D')); // null
// This file contains the implementation of the Proxy pattern, controlling access to another object.

class RealSubject {
    request() {
        return "RealSubject: Handling request.";
    }
}

class Proxy {
    constructor(realSubject) {
        this.realSubject = realSubject;
    }

    request() {
        // Add additional logic here if needed
        return this.realSubject.request();
    }
}

// Usage
const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);
console.log(proxy.request()); // Output: RealSubject: Handling request.
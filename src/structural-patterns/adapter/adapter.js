// This file contains the implementation of the Adapter pattern, allowing incompatible interfaces to work together.

class Adapter {
    constructor(adaptee) {
        this.adaptee = adaptee;
    }

    request() {
        return this.adaptee.specificRequest();
    }
}

// Example usage
class Adaptee {
    specificRequest() {
        return 'Specific request from Adaptee';
    }
}

const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
console.log(adapter.request()); // Output: Specific request from Adaptee
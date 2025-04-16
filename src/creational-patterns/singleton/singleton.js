// src/creational-patterns/singleton/singleton.js

class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        // Initialize any properties here
    }

    someMethod() {
        // Example method
        console.log("This is a method of the Singleton instance.");
    }
}

// Export the Singleton class
module.exports = Singleton;
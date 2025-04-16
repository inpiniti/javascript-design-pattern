// This file contains the implementation of the Factory Method pattern, delegating object creation to subclasses.

class Product {
    constructor(name) {
        this.name = name;
    }

    use() {
        console.log(`Using ${this.name}`);
    }
}

class ConcreteProductA extends Product {
    constructor() {
        super('Product A');
    }
}

class ConcreteProductB extends Product {
    constructor() {
        super('Product B');
    }
}

class Creator {
    createProduct(type) {
        switch (type) {
            case 'A':
                return new ConcreteProductA();
            case 'B':
                return new ConcreteProductB();
            default:
                throw new Error('Unknown product type');
        }
    }
}

// Example usage
const creator = new Creator();
const productA = creator.createProduct('A');
productA.use(); // Output: Using Product A

const productB = creator.createProduct('B');
productB.use(); // Output: Using Product B
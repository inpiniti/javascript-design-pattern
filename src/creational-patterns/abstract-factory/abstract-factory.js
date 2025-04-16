// This file implements the Abstract Factory pattern, creating families of related objects.

class AbstractFactory {
    createProductA() {
        throw new Error("Method 'createProductA()' must be implemented.");
    }

    createProductB() {
        throw new Error("Method 'createProductB()' must be implemented.");
    }
}

class ConcreteFactory1 extends AbstractFactory {
    createProductA() {
        return new ProductA1();
    }

    createProductB() {
        return new ProductB1();
    }
}

class ConcreteFactory2 extends AbstractFactory {
    createProductA() {
        return new ProductA2();
    }

    createProductB() {
        return new ProductB2();
    }
}

class ProductA1 {
    // Implementation of ProductA1
}

class ProductA2 {
    // Implementation of ProductA2
}

class ProductB1 {
    // Implementation of ProductB1
}

class ProductB2 {
    // Implementation of ProductB2
}

// Example usage
const factory1 = new ConcreteFactory1();
const productA1 = factory1.createProductA();
const productB1 = factory1.createProductB();

const factory2 = new ConcreteFactory2();
const productA2 = factory2.createProductA();
const productB2 = factory2.createProductB();
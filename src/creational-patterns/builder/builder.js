// This file contains the implementation of the Builder pattern, separating the construction of a complex object from its representation.

class Product {
    constructor() {
        this.parts = [];
    }

    add(part) {
        this.parts.push(part);
    }

    listParts() {
        console.log(`Product parts: ${this.parts.join(', ')}`);
    }
}

class Builder {
    reset() {
        this.product = new Product();
    }

    buildPartA() {
        this.product.add('PartA');
    }

    buildPartB() {
        this.product.add('PartB');
    }

    getResult() {
        return this.product;
    }
}

class Director {
    constructor(builder) {
        this.builder = builder;
    }

    constructMinimalProduct() {
        this.builder.reset();
        this.builder.buildPartA();
    }

    constructFullProduct() {
        this.builder.reset();
        this.builder.buildPartA();
        this.builder.buildPartB();
    }
}

// Example usage
const builder = new Builder();
const director = new Director(builder);

director.constructFullProduct();
const product = builder.getResult();
product.listParts();
// This file contains the implementation of the Composite pattern, allowing clients to treat individual objects and compositions uniformly.

class Component {
    operation() {
        throw new Error("This method should be overridden!");
    }
}

class Leaf extends Component {
    constructor(name) {
        super();
        this.name = name;
    }

    operation() {
        return `Leaf: ${this.name}`;
    }
}

class Composite extends Component {
    constructor() {
        super();
        this.children = [];
    }

    add(component) {
        this.children.push(component);
    }

    remove(component) {
        const index = this.children.indexOf(component);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    }

    operation() {
        return `Composite: [${this.children.map(child => child.operation()).join(', ')}]`;
    }
}

// Example usage
const leaf1 = new Leaf("Leaf 1");
const leaf2 = new Leaf("Leaf 2");
const composite = new Composite();
composite.add(leaf1);
composite.add(leaf2);

console.log(composite.operation()); // Composite: [Leaf: Leaf 1, Leaf: Leaf 2]
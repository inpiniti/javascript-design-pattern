# Composite Pattern

## Purpose
The Composite pattern is a structural design pattern that allows you to compose objects into tree structures to represent part-whole hierarchies. This pattern lets clients treat individual objects and compositions of objects uniformly.

## Usage
The Composite pattern is particularly useful when you want to represent a hierarchy of objects where both individual objects and compositions of objects should be treated the same way. It simplifies client code by allowing clients to work with complex tree structures without needing to differentiate between individual objects and their compositions.

## Example Code
```javascript
// Component
class Component {
    operation() {
        throw new Error("This method should be overridden.");
    }
}

// Leaf
class Leaf extends Component {
    constructor(name) {
        super();
        this.name = name;
    }

    operation() {
        return `Leaf: ${this.name}`;
    }
}

// Composite
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
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    operation() {
        return `Composite: [${this.children.map(child => child.operation()).join(', ')}]`;
    }
}

// Client code
const leaf1 = new Leaf("Leaf 1");
const leaf2 = new Leaf("Leaf 2");
const composite = new Composite();
composite.add(leaf1);
composite.add(leaf2);

console.log(composite.operation()); // Composite: [Leaf: Leaf 1, Leaf: Leaf 2]
```

## Conclusion
The Composite pattern is a powerful way to manage complex tree structures in your applications. By using this pattern, you can simplify your code and make it easier to manage both individual objects and groups of objects.
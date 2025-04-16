// This file implements the Prototype pattern, allowing for the creation of new objects by copying an existing instance.

class Prototype {
    constructor() {
        this.state = {};
    }

    setState(state) {
        this.state = state;
    }

    clone() {
        const clone = new Prototype();
        clone.setState({ ...this.state });
        return clone;
    }
}

// Example usage:
const original = new Prototype();
original.setState({ name: 'Original', value: 42 });

const clone = original.clone();
console.log(clone.state); // { name: 'Original', value: 42 }
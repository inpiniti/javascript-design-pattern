# Memento Pattern

The Memento pattern is a behavioral design pattern that allows an object to capture its internal state and save it externally, so that it can be restored later without violating encapsulation. This is particularly useful for implementing features like undo/redo functionality in applications.

## Purpose

The main purpose of the Memento pattern is to provide a way to restore an object to its previous state without exposing its internal structure. It allows for the preservation of an object's state at a specific point in time.

## Usage

The Memento pattern is commonly used in scenarios where you need to implement undo functionality, version control, or any situation where you need to keep track of an object's state over time.

## Example Code

```javascript
// Memento class
class Memento {
    constructor(state) {
        this.state = state;
    }
}

// Originator class
class Originator {
    constructor() {
        this.state = '';
    }

    setState(state) {
        this.state = state;
        console.log(`State set to: ${this.state}`);
    }

    saveStateToMemento() {
        return new Memento(this.state);
    }

    getStateFromMemento(memento) {
        this.state = memento.state;
        console.log(`State restored to: ${this.state}`);
    }
}

// Caretaker class
class Caretaker {
    constructor() {
        this.mementos = [];
    }

    add(memento) {
        this.mementos.push(memento);
    }

    get(index) {
        return this.mementos[index];
    }
}

// Example usage
const originator = new Originator();
const caretaker = new Caretaker();

originator.setState('State 1');
caretaker.add(originator.saveStateToMemento());

originator.setState('State 2');
caretaker.add(originator.saveStateToMemento());

originator.setState('State 3');
console.log('Current State:', originator.state);

// Restore to previous state
originator.getStateFromMemento(caretaker.get(1));
```

In this example, the `Originator` class is responsible for creating and restoring its state using the `Memento` class. The `Caretaker` class manages the mementos and allows the originator to save and restore its state.
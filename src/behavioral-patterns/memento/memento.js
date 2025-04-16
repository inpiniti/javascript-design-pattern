// This file contains the implementation of the Memento pattern, allowing for the capture and restoration of an object's state.

class Memento {
    constructor(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
}

class Originator {
    constructor() {
        this.state = '';
    }

    setState(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

    saveStateToMemento() {
        return new Memento(this.state);
    }

    getStateFromMemento(memento) {
        this.state = memento.getState();
    }
}

class Caretaker {
    constructor() {
        this.mementoList = [];
    }

    add(memento) {
        this.mementoList.push(memento);
    }

    get(index) {
        return this.mementoList[index];
    }
}

// Example usage
const originator = new Originator();
const caretaker = new Caretaker();

originator.setState('State #1');
originator.setState('State #2');
caretaker.add(originator.saveStateToMemento());

originator.setState('State #3');
caretaker.add(originator.saveStateToMemento());

originator.setState('State #4');

console.log('Current State:', originator.getState());
originator.getStateFromMemento(caretaker.get(1));
console.log('Restored State:', originator.getState());
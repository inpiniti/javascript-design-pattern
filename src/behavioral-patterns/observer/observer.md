# Observer Pattern

The Observer pattern is a behavioral design pattern that defines a one-to-many dependency between objects. When one object (the subject) changes its state, all its dependents (observers) are notified and updated automatically. This pattern is particularly useful for implementing distributed event handling systems.

## Purpose

The main purpose of the Observer pattern is to allow a subject to notify multiple observers about changes in its state without needing to know who or what those observers are. This promotes loose coupling between the subject and its observers.

## Usage

The Observer pattern is commonly used in scenarios where a change in one object requires updating others, such as in event handling systems, data binding in UI frameworks, and implementing publish-subscribe mechanisms.

## Example Code

Here is a simple implementation of the Observer pattern in JavaScript:

```javascript
// Subject
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

// Observer
class Observer {
    update(data) {
        console.log(`Observer received data: ${data}`);
    }
}

// Usage
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers('Hello Observers!'); // Both observers will receive this message
```

In this example, the `Subject` class maintains a list of observers and provides methods to add, remove, and notify them. The `Observer` class defines an `update` method that gets called when the subject notifies its observers.
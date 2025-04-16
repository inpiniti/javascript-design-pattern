# Proxy Pattern

The Proxy pattern is a structural design pattern that provides an object representing another object. It acts as an intermediary, controlling access to the original object, which can be useful for various reasons such as lazy initialization, access control, logging, or monitoring.

## Purpose

The main purpose of the Proxy pattern is to provide a surrogate or placeholder for another object to control access to it. This can help in situations where the original object is resource-intensive to create or manage.

## Usage

The Proxy pattern is commonly used in scenarios where:

- You want to control access to an object.
- You want to add additional functionality (like logging or access control) without modifying the original object.
- You want to defer the creation of an object until it is needed (lazy initialization).

## Example Code

```javascript
// proxy.js

class RealSubject {
    request() {
        console.log("RealSubject: Handling request.");
    }
}

class Proxy {
    constructor(realSubject) {
        this.realSubject = realSubject;
    }

    request() {
        console.log("Proxy: Logging request.");
        this.realSubject.request();
    }
}

// Usage
const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);

proxy.request();
```

In this example, the `Proxy` class controls access to the `RealSubject` class. When the `request` method is called on the `Proxy`, it logs the request before delegating it to the `RealSubject`.
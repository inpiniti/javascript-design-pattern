# Decorator Pattern

The Decorator pattern is a structural design pattern that allows behavior to be added to individual objects dynamically. This pattern is typically used to extend the functionalities of classes in a flexible and reusable way.

## Purpose

The main purpose of the Decorator pattern is to provide a way to add new functionality to an object without altering its structure. This is achieved by creating a set of decorator classes that are used to wrap concrete components.

## Usage

The Decorator pattern is useful when you want to add responsibilities to individual objects, rather than to an entire class. It provides a flexible alternative to subclassing for extending functionality.

## Example Code

```javascript
// Base component
class Coffee {
    cost() {
        return 5;
    }
}

// Decorator
class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 1;
    }
}

// Usage
let myCoffee = new Coffee();
console.log(myCoffee.cost()); // 5

myCoffee = new MilkDecorator(myCoffee);
console.log(myCoffee.cost()); // 6
```

In this example, we have a `Coffee` class that has a cost method. We then create a `MilkDecorator` that adds the cost of milk to the coffee. This allows us to dynamically add functionality to our coffee object without modifying the original class.
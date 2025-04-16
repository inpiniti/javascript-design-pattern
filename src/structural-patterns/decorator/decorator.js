// This file implements the Decorator pattern, allowing behavior to be added to individual objects dynamically.

class Coffee {
    cost() {
        return 5;
    }
}

class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 1;
    }
}

class SugarDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 0.5;
    }
}

// Usage
let myCoffee = new Coffee();
console.log("Cost of coffee:", myCoffee.cost());

myCoffee = new MilkDecorator(myCoffee);
console.log("Cost of coffee with milk:", myCoffee.cost());

myCoffee = new SugarDecorator(myCoffee);
console.log("Cost of coffee with milk and sugar:", myCoffee.cost());
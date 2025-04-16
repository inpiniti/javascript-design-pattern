// This file contains the implementation of the Template Method pattern, defining the skeleton of an algorithm.

class AbstractClass {
    templateMethod() {
        this.stepOne();
        this.stepTwo();
        this.stepThree();
    }

    stepOne() {
        console.log("Step One: Default Implementation");
    }

    stepTwo() {
        console.log("Step Two: Default Implementation");
    }

    stepThree() {
        console.log("Step Three: Default Implementation");
    }
}

class ConcreteClassA extends AbstractClass {
    stepOne() {
        console.log("ConcreteClassA: Step One Implementation");
    }

    stepTwo() {
        console.log("ConcreteClassA: Step Two Implementation");
    }
}

class ConcreteClassB extends AbstractClass {
    stepTwo() {
        console.log("ConcreteClassB: Step Two Implementation");
    }

    stepThree() {
        console.log("ConcreteClassB: Step Three Implementation");
    }
}

// Example usage
const instanceA = new ConcreteClassA();
instanceA.templateMethod();

const instanceB = new ConcreteClassB();
instanceB.templateMethod();
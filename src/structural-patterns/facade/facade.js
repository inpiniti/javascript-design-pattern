// This file contains the implementation of the Facade pattern, providing a simplified interface to a complex subsystem.

class SubsystemA {
    operationA() {
        return 'Subsystem A: Ready!';
    }
}

class SubsystemB {
    operationB() {
        return 'Subsystem B: Ready!';
    }
}

class SubsystemC {
    operationC() {
        return 'Subsystem C: Ready!';
    }
}

class Facade {
    constructor() {
        this.subsystemA = new SubsystemA();
        this.subsystemB = new SubsystemB();
        this.subsystemC = new SubsystemC();
    }

    operation() {
        const results = [];
        results.push(this.subsystemA.operationA());
        results.push(this.subsystemB.operationB());
        results.push(this.subsystemC.operationC());
        return results.join(' ');
    }
}

// Example usage
const facade = new Facade();
console.log(facade.operation()); // Outputs: Subsystem A: Ready! Subsystem B: Ready! Subsystem C: Ready!
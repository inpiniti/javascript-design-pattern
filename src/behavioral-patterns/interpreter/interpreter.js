// This file implements the Interpreter pattern, defining a representation for a language's grammar.

class Expression {
    interpret(context) {
        // Default implementation, can be overridden by subclasses
        return null;
    }
}

class TerminalExpression extends Expression {
    constructor(data) {
        super();
        this.data = data;
    }

    interpret(context) {
        return context.includes(this.data);
    }
}

class OrExpression extends Expression {
    constructor(expr1, expr2) {
        super();
        this.expr1 = expr1;
        this.expr2 = expr2;
    }

    interpret(context) {
        return this.expr1.interpret(context) || this.expr2.interpret(context);
    }
}

// Example usage
const isMale = new TerminalExpression("Male");
const isMarried = new TerminalExpression("Married");
const orExpression = new OrExpression(isMale, isMarried);

const context = "Married";
console.log(orExpression.interpret(context)); // Output: true
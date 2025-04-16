# Bridge Pattern

The Bridge pattern is a structural design pattern that separates an abstraction from its implementation, allowing the two to vary independently. This pattern is particularly useful when both the abstraction and the implementation can be extended without affecting each other.

## Purpose

The main purpose of the Bridge pattern is to decouple an abstraction from its implementation so that both can evolve independently. This is achieved by creating a bridge interface that allows the abstraction to communicate with the implementation.

## Usage

The Bridge pattern is used when:

- You want to avoid a permanent binding between an abstraction and its implementation.
- Both the abstraction and the implementation can be extended independently.
- You want to provide a way to change the implementation at runtime.

## Example Code

```javascript
// Implementor
class DrawingAPI {
    drawCircle(x, y, radius) {
        throw new Error("This method should be overridden.");
    }
}

// Concrete Implementor
class DrawingAPI1 extends DrawingAPI {
    drawCircle(x, y, radius) {
        console.log(`API1.circle at ${x},${y} radius ${radius}`);
    }
}

// Concrete Implementor
class DrawingAPI2 extends DrawingAPI {
    drawCircle(x, y, radius) {
        console.log(`API2.circle at ${x},${y} radius ${radius}`);
    }
}

// Abstraction
class Shape {
    constructor(drawingAPI) {
        this.drawingAPI = drawingAPI;
    }

    draw() {
        throw new Error("This method should be overridden.");
    }
}

// Refined Abstraction
class Circle extends Shape {
    constructor(x, y, radius, drawingAPI) {
        super(drawingAPI);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw() {
        this.drawingAPI.drawCircle(this.x, this.y, this.radius);
    }
}

// Client code
const circle1 = new Circle(5, 10, 2, new DrawingAPI1());
const circle2 = new Circle(5, 10, 2, new DrawingAPI2());

circle1.draw(); // API1.circle at 5,10 radius 2
circle2.draw(); // API2.circle at 5,10 radius 2
```

In this example, the `Shape` class serves as the abstraction, while `DrawingAPI` acts as the implementor. The `Circle` class is a refined abstraction that uses the `DrawingAPI` to perform its drawing operations. This allows for flexibility in choosing different drawing implementations without modifying the `Circle` class.
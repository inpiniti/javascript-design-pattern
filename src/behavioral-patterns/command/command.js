// This file contains the implementation of the Command pattern, encapsulating a request as an object.

class Command {
    constructor(execute, undo) {
        this.execute = execute;
        this.undo = undo;
    }
}

class CommandManager {
    constructor() {
        this.commands = [];
        this.history = [];
    }

    executeCommand(command) {
        command.execute();
        this.history.push(command);
    }

    undoCommand() {
        const command = this.history.pop();
        if (command) {
            command.undo();
        }
    }
}

// Example usage
const light = {
    turnOn: () => console.log("Light is ON"),
    turnOff: () => console.log("Light is OFF"),
};

const turnOnCommand = new Command(light.turnOn, light.turnOff);
const turnOffCommand = new Command(light.turnOff, light.turnOn);

const commandManager = new CommandManager();
commandManager.executeCommand(turnOnCommand); // Light is ON
commandManager.executeCommand(turnOffCommand); // Light is OFF
commandManager.undoCommand(); // Light is ON
commandManager.undoCommand(); // Light is OFF
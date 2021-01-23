class Index {
    currentXPos = 0;
    currentYPos = 0;
    currentDirection
    nextCommand;
    commandArray;
    commandLength = 0;
    cardinalPoints = ["NORTH", "EAST", "SOUTH", "WEST"]
    initializerover(x, y, direction) {
        this.currentXPos = x;
        this.currentYPos = y;
        this.currentDirection = direction;
    }
    changeRoverDirection() {
        let indexOfCurrentDirection = this.cardinalPoints.indexOf(this.currentDirection);
        let newPos = ((indexOfCurrentDirection + 1) % this.cardinalPoints.length)
        this.currentDirection = this.cardinalPoints[newPos]
    }
    //This handles left and right turns of the rover
    rotate(command) {
        switch (command) {
            case "L":
                // it took me almost a day to comeup with this bit
                this.cardinalPoints.reverse()
                this.changeRoverDirection()
                this.cardinalPoints.reverse()
                break;
            case "R":
                this.changeRoverDirection()
                break;
            default:
        }
    }
    setTheWheelsMoving(command) {
        let posX = 0;
        let posY = 0;
        if (this.currentDirection === 'NORTH') {
            posY = 1;
        } else if (this.currentDirection === 'EAST') {
            posX += 1;
        } else if (this.currentDirection === 'SOUTH') {
            posY = -1;
        } else if (this.currentDirection === 'WEST') {
            posX = -1;
        }
        // This was according to JJ's recommendation to use product
        if (command === 'B') {
            posX *= -1;
            posY *= -1;
        }
        this.currentXPos += posX
        this.currentYPos += posY
    }
    moverover(command) {
        this.commandArray = command.split("")
        this.commandLength = this.commandArray.length;
        for (let i = 0; i < this.commandLength; i++) {
            let currentCommand=this.commandArray[i]
            if (currentCommand === "L" || currentCommand === "R") {
                this.rotate(this.commandArray[i])
            }
            if (currentCommand === "B" || currentCommand === "F") {
                this.setTheWheelsMoving(this.commandArray[i])
            }
        }
    }
}


module.exports = Index;





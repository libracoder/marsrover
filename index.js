class Index {
    currentXPos = 0;
    currentYPos = 0;
    currentDirection;
    obstacleAhead = false;
    obstacles = [[1, 4], [3, 5], [7, 4]]
    commands;
    commandLength = 0;
    cardinalPoints = ["NORTH", "EAST", "SOUTH", "WEST"]

    constructor(cordinates, direction) {
        this.currentXPos = cordinates[0];
        this.currentYPos = cordinates[1];
        this.currentDirection = direction;
    }

    downloadObstacles(obstacles) {
        this.obstacles = obstacles
    }

    isObstacleAhead(cordinates) {
        // console.log(cordinates)
        for (let index = 0; index < this.obstacles.length; index++) {
            // console.log(cordinates.toString(),this.obstacles[index].toString())
            if (cordinates.toString() === this.obstacles[index].toString()) {
                return true
            }
        }
        return false
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

    moveBackwardOrForward(command) {
        let _direction = this.currentDirection

        let posX = 0;
        let posY = 0;
        let newPosX;
        let newPosY;
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
        newPosX = this.currentXPos + posX
        newPosY = this.currentYPos + posY
        if (!this.isObstacleAhead([newPosX, newPosY])) {
            this.setCordinates(newPosX, newPosY)
        }

    }

    setCordinates(newPosX, newPosY) {
        this.currentXPos = newPosX
        this.currentYPos = newPosY
    }

    moverover(command) {
        this.commands = command.split("")
        this.commandLength = this.commands.length;
        for (let i = 0; i < this.commandLength; i++) {
            let currentCommand = this.commands[i]
            if (currentCommand === "L" || currentCommand === "R") {
                this.rotate(this.commands[i])
            }
            //checks if obstacle is ahead before it moves the rover
            if (currentCommand === "B" || currentCommand === "F") {
                this.moveBackwardOrForward(this.commands[i])
            }
        }
    }
}

module.exports = Index;




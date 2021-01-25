class Index {
    currentXPos = 0;
    currentYPos = 0;
    currentDirection;
    obstacles = []
    commands;
    cardinalPoints = ["NORTH", "EAST", "SOUTH", "WEST"]

    constructor(cordinates, direction) {
        this.currentXPos = cordinates[0];
        this.currentYPos = cordinates[1];
        this.currentDirection = direction;
    }
    setCordinates(newPosX, newPosY) {
        this.currentXPos = newPosX
        this.currentYPos = newPosY
    }
    moverover(command) {
        this.commands = command.split("") //split commands into array
        for (let i = 0; i < this.commands.length; i++) {
            let currentCommand = this.commands[i]
            if (currentCommand === "L" || currentCommand === "R") {
                this.rotateRover(this.commands[i])
            }
            //checks if the next command is Forward or Backward
            if (currentCommand === "B" || currentCommand === "F") {
                this.moveBackwardOrForward(this.commands[i])
            }
        }
    }


    changeRoverDirection() {
        let indexOfCurrentDirection = this.cardinalPoints.indexOf(this.currentDirection);
        let newPos = ((indexOfCurrentDirection + 1) % this.cardinalPoints.length)
        this.currentDirection = this.cardinalPoints[newPos]
    }

    //This rotates the rover in the left or right direction
    rotateRover(command) {
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
        if (_direction === 'NORTH') {
            posY = 1;
        } else if (_direction === 'EAST') {
            posX += 1;
        } else if (_direction === 'SOUTH') {
            posY = -1;
        } else if (_direction === 'WEST') {
            posX = -1;
        }
        // This was according to JJ's recommendation to use product
        if (command === 'B') {
            posX *= -1;
            posY *= -1;
        }
        newPosX = this.currentXPos + posX
        newPosY = this.currentYPos + posY

        /*
           checks if the new cordinate is an obstacle.
           if it is, it dosen't move the rover to the new cordinates
         */
        if (!this.isObstacleAhead([newPosX, newPosY])) {
            this.setCordinates(newPosX, newPosY)
        }

    }




    setObstacles(obstacles) {
        this.obstacles = obstacles
    }

    isObstacleAhead(cordinates) {
        for (let index = 0; index < this.obstacles.length; index++) {
            if (cordinates.toString() === this.obstacles[index].toString()) {
                return true
            }
        }
        return false
    }
}

module.exports = Index;




class Index {
    currentXPos = 0;
    currentYPos = 0;
    currentDirection;
    obstacles = []
    obstacleInTheWay=false;
    newPosition = ""
    commands;
    cardinalPoints = ["NORTH", "EAST", "SOUTH", "WEST"]

    constructor(posX,posY, direction) {
        this._setCordinates(posX,posY)
        this._setCurrentDirection(direction);
    }
    _getCurrentDirection(){
        return this.currentDirection
    }
    _setCurrentDirection(direction){
        this.currentDirection=direction
    }
    _setCordinates(newPosX, newPosY) {
        this.currentXPos = newPosX
        this.currentYPos = newPosY
    }
    _setNewPosition(position){
        this.newPosition=position
    }
    _getNewPosition(){
        return this.newPosition;
    }
    setObstacles(obstacles) {
        this.obstacles = obstacles
    }
    moveRover(command) {
        this.commands = command.split("") //split commands into array
        for (let i = 0; i < this.commands.length; i++) {
            let currentCommand = this.commands[i]
            if (currentCommand === "L" || currentCommand === "R") {
                this._rotateRover(this.commands[i])
            }
            //checks if the next command is Forward or Backward
            if (currentCommand === "B" || currentCommand === "F") {
                this._moveBackwardOrForward(this.commands[i])
            }
        }


        if (this.obstacleInTheWay) {
            //This prints the new-cordinates after the rover movement
            this._setNewPosition(`(${this.currentXPos}, ${this.currentYPos}) ${this._getCurrentDirection()} STOPPED`)
            console.log(this._getNewPosition())
        }
        else {
            //This prints the new-cordinates after the rover movement
            this._setNewPosition(`(${this.currentXPos}, ${this.currentYPos}, ${this._getCurrentDirection()})`)
            console.log(this._getNewPosition());
        }
    }


    _changeRoverDirection() {
        let indexOfCurrentDirection = this.cardinalPoints.indexOf(this._getCurrentDirection());
        let newPos = ((indexOfCurrentDirection + 1) % this.cardinalPoints.length)
        this._setCurrentDirection(this.cardinalPoints[newPos])
    }

    //This rotates the rover in the left or right direction
    _rotateRover(command) {
        switch (command) {
            case "L":
                // it took me almost a day to comeup with this bit
                this.cardinalPoints.reverse()
                this._changeRoverDirection()
                this.cardinalPoints.reverse()
                break;
            case "R":
                this._changeRoverDirection()
                break;
            default:
        }
    }

    // This moves the rover forward or backward
    _moveBackwardOrForward(command) {
        let _direction = this._getCurrentDirection()
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
        if (!this._isObstacleAhead([newPosX, newPosY])) {
            this._setCordinates(newPosX, newPosY)
        }

    }

    _isObstacleAhead(cordinates) {
        for (let index = 0; index < this.obstacles.length; index++) {
            if (cordinates.toString() === this.obstacles[index].toString()) {
                this.obstacleInTheWay=true
                return true
            }
        }
        return false
    }
}

module.exports = Index;




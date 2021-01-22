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

    moverover(command) {
        this.commandArray = command.split("")
        this.commandLength = this.commandArray.length;

        for (let i = 0; i < this.commandLength; i++) {
            if (this.currentDirection === "EAST") {
                if (this.commandArray[i] === "F") {
                    this.currentXPos++
                } else if (this.commandArray[i] === "B") {
                    this.currentXPos--
                }
            }


        }
    }






}


module.exports = Index;





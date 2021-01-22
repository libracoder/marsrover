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









}


module.exports = Index;





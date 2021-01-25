const {describe} = require("mocha");
const {expect} = require("chai");
const Rover = require("./index");

describe("marsrover", function () {

    it("001 - tests for no movement", function () {
        let  rover = new Rover(4,2, "EAST");
        expect(rover.currentXPos).to.be.equal(4)
        expect(rover.currentYPos).to.be.equal(2)
        expect(rover.currentDirection).to.be.equal("EAST")
    });

    it("002 - tests for a forward in the EAST direction", function () {
        let  rover = new Rover(0,0, "EAST");
        rover.moveRover("F")
        expect(rover.currentXPos).to.be.equal(1)
        expect(rover.currentYPos).to.be.equal(0)
        expect(rover.currentDirection).to.be.equal("EAST")
    });
    it("003 - tests for a backward in the EAST direction ", function () {
        let  rover = new Rover(0,0, "EAST");
            rover.moveRover("B")
        expect(rover.currentXPos).to.be.equal(-1)
        expect(rover.currentYPos).to.be.equal(0)
        expect(rover.currentDirection).to.be.equal("EAST")
    });
    it("004 - tests for a FB ", function () {
        let  rover = new Rover(0,0, "EAST");
            rover.moveRover("FB")
        expect(rover.currentXPos).to.be.equal(0)
        expect(rover.currentYPos).to.be.equal(0)
        expect(rover.currentDirection).to.be.equal("EAST")
    });
    it("005 - tests for a FBL ", function () {
        let  rover = new Rover(0,0, "EAST");
        rover.moveRover("FBL")
        expect(rover.currentXPos).to.be.equal(0)
        expect(rover.currentYPos).to.be.equal(0)
        expect(rover.currentDirection).to.be.equal("NORTH")
    });
    it("006 - tests for a FBBBBBRRRLLLLLFRF ", function () {
        let  rover = new Rover(0,0, "EAST");
        rover.moveRover("FBBBBBRRRLLLLLFRF")
        expect(rover.currentXPos).to.be.equal(-5)
        expect(rover.currentYPos).to.be.equal(1)
        expect(rover.currentDirection).to.be.equal("NORTH")
    });
    it("007 - tests for Obstacles ", function () {
        let  rover = new Rover(0,0, "EAST");
        rover.setObstacles([[3,4], [3,5], [7,4]])
        rover.moveRover("FFFLFFFFF")
        expect(rover.currentXPos).to.be.equal(3)
        expect(rover.currentYPos).to.be.equal(3)
        expect(rover.currentDirection).to.be.equal("NORTH")
    });

});

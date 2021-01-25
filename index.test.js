const {describe} = require("mocha");
const {expect} = require("chai");
const Rover = require("./index");

describe("marsrover", function () {



    it("002 - tests for a forward in the EAST direction", function () {
        let rover = new Rover(0, 0, "EAST");
        rover.moveRover("F")
        expect(rover._getNewPosition()).to.be.equal("(1, 0, EAST)")

    });
    it("003 - tests for a backward in the EAST direction ", function () {
        let rover = new Rover(0, 0, "EAST");
        rover.moveRover("B")
        expect(rover._getNewPosition()).to.be.equal("(-1, 0, EAST)")
    });
    it("004 - tests for a FB ", function () {
        let rover = new Rover(0, 0, "EAST");
        rover.moveRover("FB")
        expect(rover._getNewPosition()).to.be.equal("(0, 0, EAST)")
    });
    it("005 - tests for a FBL ", function () {
        let rover = new Rover(0, 0, "EAST");
        rover.moveRover("FBL")
        expect(rover._getNewPosition()).to.be.equal("(0, 0, NORTH)")
    });
    it("007 - tests for Obstacles ", function () {
        let rover = new Rover(0, 0, "EAST");
        rover.setObstacles([[3, 4], [3, 5], [7, 4]])
        rover.moveRover("FFFLFFFFF")
        expect(rover._getNewPosition()).to.be.equal("(3, 3) NORTH STOPPED")

    });

});

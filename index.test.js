const {describe} = require("mocha");
const {expect} = require("chai");
const Rover = require("./index");

describe("marsrover", function () {
    let rover;
    beforeEach(function () {
        rover = new Rover();
    });
    it("001 - tests for no movement", function () {
        rover.initializerover(4,2, "EAST")
        expect(rover.currentXPos).to.be.equal(4)
        expect(rover.currentYPos).to.be.equal(2)
        expect(rover.currentDirection).to.be.equal("EAST")
    });

    it("002 - tests for a forward in the EAST direction", function () {
        rover.initializerover(0,0, "EAST")
        rover.moverover("F")
        expect(rover.currentXPos).to.be.equal(1)
        expect(rover.currentYPos).to.be.equal(0)
        expect(rover.currentDirection).to.be.equal("EAST")
    });
    it("003 - tests for a backward in the EAST direction ", function () {
        rover.initializerover(0,0, "EAST")
            rover.moverover("B")
        expect(rover.currentXPos).to.be.equal(-1)
        expect(rover.currentYPos).to.be.equal(0)
        expect(rover.currentDirection).to.be.equal("EAST")
    });
    it("004 - tests for a FB ", function () {
        rover.initializerover(0,0, "EAST")
            rover.moverover("FB")
        expect(rover.currentXPos).to.be.equal(0)
        expect(rover.currentYPos).to.be.equal(0)
        expect(rover.currentDirection).to.be.equal("EAST")
    });
    it("005 - tests for a FBL ", function () {
        rover.initializerover(0,0, "EAST")
        rover.moverover("FBL")
        expect(rover.currentXPos).to.be.equal(0)
        expect(rover.currentYPos).to.be.equal(0)
        expect(rover.currentDirection).to.be.equal("NORTH")
    });

});

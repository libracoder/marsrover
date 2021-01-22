const {describe} = require("mocha");
const {expect} = require("chai");
const Rover = require("./index");

describe("marsrover", function () {
    let rover;
    beforeEach(function () {
        rover = new Rover();
    });
    it("tests for no movement", function () {
        expect(rover.currentXPos).to.be.equal(4)
        expect(rover.currentYPos).to.be.equal(2)
        expect(rover.direction).to.be.equal("EAST")
    });

});

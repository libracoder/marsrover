const {describe} = require("mocha");
const {expect} = require("chai");
const Rover = require("./index");

describe("marsrover", function () {
    it('set dropoff location', function() {
        let rover = new Rover(0, 0,"NORTH");
        expect(rover.currentXPos).equal(0);
        expect(rover.currentYPos).equal(0);
        expect(rover.currentDirection).equal("NORTH");
    });
    it('set default location when not assigned as (0,0,NORTH)', function() {
        let rover = new Rover();
        expect(rover.currentXPos).equal(0);
        expect(rover.currentYPos).equal(0);
        expect(rover.currentDirection).equal("NORTH");
    });
});

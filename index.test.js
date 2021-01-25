const {describe} = require("mocha");
const {expect} = require("chai");
const Rover = require("./index");

describe("intialization test", function () {
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


describe('Tests for moving the rover forward and backward', function() {
    it('should increase X coordinate when moving FORWARD EAST', function() {
        let rover = new Rover(0,0,"EAST");
        rover.moveRover("F")
        expect(rover.currentXPos).equal(1);
        expect(rover.currentYPos).equal(0);
        expect(rover.currentDirection).equal("EAST");
    });
    it('should increase Y coordinate when moving FORWARD NORTH', function() {
        let rover = new Rover(0,0,"NORTH");
        rover.moveRover("F")
        expect(rover.currentXPos).equal(0);
        expect(rover.currentYPos).equal(1);
        expect(rover.currentDirection).equal("NORTH");
    });

    it('should reduce X coordinate when moving FORWARD WEST', function() {
        let rover = new Rover(0,0,"WEST");
        rover.moveRover("F")
        expect(rover.currentXPos).equal(-1);
        expect(rover.currentYPos).equal(0);
        expect(rover.currentDirection).equal("WEST");
    });
    it('should reduce Y coordinate when moving FORWARD SOUTH', function() {
        let rover = new Rover(0,0,"SOUTH");
        rover.moveRover("F")
        expect(rover.currentXPos).equal(0);
        expect(rover.currentYPos).equal(-1);
        expect(rover.currentDirection).equal("SOUTH");
    });



    it('should increase Y coordinate when moving BACKWARD SOUTH', function() {
        let rover = new Rover(0,0,"SOUTH");
        rover.moveRover("B")
        expect(rover.currentXPos).equal(0);
        expect(rover.currentYPos).equal(1);
        expect(rover.currentDirection).equal("SOUTH");
    });

    it('should increase X coordinate when moving BACKWARD WEST', function() {
        let rover = new Rover(0,0,"WEST");
        rover.moveRover("B")
        expect(rover.currentXPos).equal(1);
        expect(rover.currentYPos).equal(0);
        expect(rover.currentDirection).equal("WEST");
    });


    it('should decrease Y coordinate when moving BACKWARD NORTH', function() {
        let rover = new Rover(0,0,"NORTH");
        rover.moveRover("B")
        expect(rover.currentXPos).equal(0);
        expect(rover.currentYPos).equal(-1);
        expect(rover.currentDirection).equal("NORTH");
    });

    it('should decrease X coordinate when moving BACKWARD EAST', function() {
        let rover = new Rover(0,0,"EAST");
        rover.moveRover("B")
        expect(rover.currentXPos).equal(-1);
        expect(rover.currentYPos).equal(0);
        expect(rover.currentDirection).equal("EAST");
    });


    describe('Test for turning the rover turn the rover left/right (l,r)', function() {
        it('should change direction from NORTH to WEST when command is to turn left', function() {
            let rover = new Rover(0,0,"NORTH");
            rover.moveRover("L")
            expect(rover.currentDirection).equal("WEST");
        });
        it('should change direction from NORTH to EAST when command is to turn right', function() {
            let rover = new Rover(0,0,"NORTH");
            rover.moveRover("R")
            expect(rover.currentDirection).equal("EAST");
        });
    });
});


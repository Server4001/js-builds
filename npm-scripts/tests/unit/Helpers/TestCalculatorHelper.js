'use strict';

const expect = require('chai').expect;
const CalculatorHelper = require('../../../src/Helpers/CalculatorHelper');
const TheNumber = require('../../../src/Models/TheNumber');

describe('Calculator Helper', () => {
    describe('add()', () => {
        it('should add two numbers', () => {
            const number1 = new TheNumber(2);
            const number2 = new TheNumber(7);

            expect(CalculatorHelper.add(number1, number2)).to.equal(9);
        });

        it('should subtract a negative number', () => {
            const number1 = new TheNumber(2);
            const number2 = new TheNumber(-7);

            expect(CalculatorHelper.add(number1, number2)).to.equal(-5);
        })
    });

    describe('subtract()', () => {
        it('should subtract two numbers', () => {
            const number1 = new TheNumber(2);
            const number2 = new TheNumber(7);

            expect(CalculatorHelper.subtract(number1, number2)).to.equal(-5);
        });

        it('should add a negative number', () => {
            const number1 = new TheNumber(2);
            const number2 = new TheNumber(-7);

            expect(CalculatorHelper.subtract(number1, number2)).to.equal(9);
        })
    });
});

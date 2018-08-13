"use strict";

const Displayer = require('../Components/Displayer');

const CalculatorHelper = (function() {
    return {

        /**
         * @param {TheNumber} number1
         * @param {TheNumber} number2
         *
         * @returns {Number}
         */
        add(number1, number2) {
            return (number1.getNumber() + number2.getNumber());
        },

        /**
         * @param {TheNumber} number1
         * @param {TheNumber} number2
         *
         * @returns {Number}
         */
        subtract(number1, number2) {
            return (number1.getNumber() - number2.getNumber());
        },

        /**
         * @param {TheNumber} number1
         * @param {TheNumber} number2
         *
         * @returns {Number}
         */
        multiply(number1, number2) {
            return (number1.getNumber() * number2.getNumber());
        },

        /**
         * @param {TheNumber} number1
         * @param {TheNumber} number2
         *
         * @returns {Number}
         */
        divide(number1, number2) {
            return (number1.getNumber() / number2.getNumber());
        },

        /**
         * @param {TheNumber} number1
         * @param {TheNumber} number2
         *
         * @returns {Number}
         */
        addDisplay(number1, number2) {
            const result = number1.getNumber() + number2.getNumber();

            Displayer.display(result);

            return result;
        }
    };
})();

module.exports = CalculatorHelper;

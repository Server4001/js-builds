"use strict";

require('babel-polyfill');

const TheNumber = require('./Models/TheNumber');
const CalculatorHelper = require('./Helpers/CalculatorHelper');
const UrlHelper = require('./Helpers/UrlHelper');

const firstNumber = new TheNumber(5);
const secondNumber = new TheNumber(4);

CalculatorHelper.addDisplay(firstNumber, secondNumber);

const difference = CalculatorHelper.subtract(firstNumber, secondNumber);
console.log(difference);

UrlHelper.hitHome();

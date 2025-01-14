const { Given, When, Then } = require('@cucumber/cucumber');
const {expect} = require('expect');
const {add} = require('../add.js');

let num1;
let num2;
let result;

Given('les nombres {int} et {int}', (a, b) => {
    num1 = a;
    num2 = b;
});

When('j\'additionne les deux nombres', () => {
    result = add(num1 , num2);
});

Then('le résultat devrait être {int}', (expectedResult) => {
    expect(result).toBe(expectedResult);
});
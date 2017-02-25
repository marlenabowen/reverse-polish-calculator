'use strict';
import { clone } from 'lodash';

export default class ReversePolishCalculator {
  static calculate(inputString) {
    console.log("no!")
    const inputArray = inputString.split(' ');
    return this.solve(inputArray);
  }

  static solve(inputArray) {
    if (!this.hasOperators(inputArray)) { return inputArray.join('') }

    let operator;
    let match;
    let result;
    let newArray = clone(inputArray);
    inputArray.some((element, index) => {
      operator = this.findOperator(element)
      if (operator) {
        result = eval(inputArray[index-2] + operator + inputArray[index-1]).toString();
        newArray.splice(index-2, 3, result);
        return true;
      }
    });
    return this.solve(newArray);
  }

  static hasOperators(inputArray) {
    return inputArray.some((element) => this.findOperator(element));
  }

  static findOperator(element) {
    const match = element.match(/[\+\-\/\*]$/);
    if (match) { return match[0] }
  }
}

'use strict';

export default class ReversePolishCalculator {
  static calculate(inputString) {
    const inputArray = inputString.split(' ');
    return this.solve(inputArray);
  }

  static solve(inputArray) {
    let stack = [];
    inputArray.some((element) => {
      switch (element) {
      case '+':
      case '-':
      case '*':
      case '/':
        return this.executeOperator(element, stack);
        break;
      default:
        stack.push(element);
      }
    });
    let result = '';
    result = stack.toString();
    result = result.replace(/,/g, " ");
    return result;
  }

  static executeOperator(operator, stack) {
    let a = '';
    let b = '';
    let newNumber = 0;
    b = stack.pop();
    a = stack.pop();
    newNumber = eval(a + operator + b).toString();
    stack.push(newNumber);
  }
}

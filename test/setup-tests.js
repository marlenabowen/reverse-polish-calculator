require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

let chai = require('chai')
global.expect = chai.expect

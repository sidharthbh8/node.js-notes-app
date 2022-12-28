const validator = require('validator')
const notes = require('./notes.js')

console.log(validator.isEmail('sidharthmsn.com')); // not an email
console.log(validator.isURL('https://www.npmjs.com/package/validator'));
console.log(validator.isURL('htps://ww.npmjs.m/predetor')); // not a vaild url
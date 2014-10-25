var expect = require("chai").expect;

describe("demo", function() {
   it("adding two number", function(){
       expect(4+5).to.equal(9)
   });
});

describe("JSON", function() {
   describe(".parse()", function() {
       it("should detect malformed JSON strings", function(){
           //Test Goes Here
       });
   });
});



// To get started:
//
//   $ npm install -g mocha
//   $ npm install chai
//   $ mocha 001-myFirstTest.js

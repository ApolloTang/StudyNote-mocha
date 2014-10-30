var expect = require("chai").expect;
var tags= require("../lib/tags.js");

describe("Tags", function(){
    describe("#parse()", function(){

        it("should parse long formed tags", function(){
            var args = ["--depth=4", "--hello=world"];
            var results = tags.parse(args);
            expect(results).to.have.a.property("depth", 4);       // to have property "depth" w value 4
            expect(results).to.have.a.property("hello", "world");
        });

        it("should fallback to defaults", function(){
            var args = ["--depth=4", "--hello=world"];
            var defaults = { depth:2, foo: "bar"};
            var results = tags.parse(args, defaults);
            var expected = {
                  depth: 4      //  <-- this one is overlap with test case
                , foo: "bar"
                , hello: "world"
            };
            expect(results).to.deep.equal(expected);  // use deep to match object
        });

        it("should accept tags without values as a bool", function(){
            var args = ["--searchContents"];
            var results = tags.parse(args);

            expect(results).to.have.a.property("searchContents");
        });

        it("should accept short formed tags", function(){
            var args = ["-sd=4", "-h=world"];
            var results = tags.parse(args);

            expect(results).to.have.a.property("sd", 4);
            expect(results).to.have.a.property("h", "world");
        });

        it("should accept short formed tags, and short form tag w/o value", function(){
            var args = ["-sd=4", "-h"];
            var replacements = {
                  s: "searchContents"
                , d: "depth"
                , h: "hello"
            };

            var results = tags.parse( args, {}, replacements);

            var expected  = {
                searchContents : true
                , depth : 4
                , hello : true
            };

            expect(results).to.deep.equal(expected);j
        });


    });
});

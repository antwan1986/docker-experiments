// Loading dependencies.
var ExampleClass = require('../src/ExampleClass');

describe('ExampleClass', function() {

    context('testFunc()', function() {

        it('should return correctly', function() {
            var myInstantiation = new ExampleClass();

            expect(myInstantiation.testFunc()).to.equal(10);
        });

    });

});

describe('describe block', function() {

    context('context block', function() {
        it('nested context test', function() {
            expect(1).to.equal(1);
        });
    });

    it('random test', function() {
        expect(1).to.equal(1);
    });

});

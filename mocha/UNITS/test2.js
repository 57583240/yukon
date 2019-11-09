/* eslint-disable no-undef, func-names, no-restricted-globals */
describe('Violations', () => {
	context('rating.b.a', () => {
		before(() => {
			/* eslint-disable-next-line no-undef  */
			window.confirm = sinon.stub(window, 'confirm');
		});
		it('is boolean', function (done) {
			this.timeout(0);
			confirm.onCall(0).returns(true);
			rating.b();
			assert.isBoolean(rating.b.a, '[message]');
			// rating.a.a = 0;
			ratifng.b();
			// assert.isBoolean(rating.b.a, '[message]');
			done();
		});
		after(() => {
			window.confirm.restore();
			sinon.restore();
		});
	});
});

/* eslint-disable no-undef, prefer-arrow-callback, func-names */
describe('Type of site', () => {
	context('rating.a.a', () => {
		before(() => {
			window.prompt = sinon.stub(window, 'prompt');
		});
		it('is number', () => {
			prompt.onCall(0).returns('1');
			rating.a();
			assert.isNumber(rating.a.a, '[message]');
		});
		after(() => {
			window.prompt.restore();
			sinon.restore();
			delete rating.a.a;
		});
	});
});
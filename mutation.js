/**
* JSDoc.
*
* For Collaborate / Contribute / Assist / Follow / …etc:
* @author {http://lb.164.gr}
*
* 🤝 🤝 🤝
* @description {http://lb.164.gr/?app=?yukon}
*
* app yukon v=1573226027920 from 08 Nov 19
*/; /* eslint-disable-line no-extra-semi */

/* eslint-disable no-restricted-globals */

/* eslint-disable-next-line no-unused-vars */
const rating = {
	result: ['lowest', 'lowest+', 'low', 'low+', 'medium', 'medium+', 'high', 'high+', 'highest'],
	number: 6,
	get string() {
		return this.result[this.number];
	},
	a() {
		// ТИП САЙТА
		this.a.a = +prompt('1 - hah\n2 - bax\n 3 - mag\n 4 - …', '1');
	},
	b() {
		// ТЕСТ НА НАРУШЕНИЯ
		this.b.a = this.a.a === 1 || confirm('сбыт дури / вранья / дармовых денег ?');
	},
	c() {
		// YMYL
	},
	d() {
		// …
	},
	play() {
		/* const KeyFN = document.addEventListener('keydown', (event) => {
			if(event.keycode === FN + (1 || … || 5))
		}); */
		this.a();
		this.b();
		if (!this.b.a) return;
		this.c();
		this.d();
	},
};
// rating.play();

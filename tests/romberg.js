const should = require('chai').should()

const romberg = require('../lib/romberg')

describe('romberg', () => {
	it('should give the right result for the example problem in Chapra', () => {
		const f = x => 0.2 + 25 * x - 200 * x ** 2 + 675 * x ** 3 - 900 * x ** 4 + 400 * x ** 5
		const a = 0
		const b = 0.8
		let result = romberg(0.005, 100, f, a, b)
		let value = Math.round(result * 1000000)/1000000
		value.should.equal(1.640533)
	})
})
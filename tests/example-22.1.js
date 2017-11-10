const should = require('chai').should()

describe('trapezoid', () => {
	it('should return the values found in Chapra (to the given accuracy) for the integral used', () => {
		const f = x => 0.2 + 25 * x - 200 * x ** 2 + 675 * x ** 3 - 900 * x ** 4 + 400 * x ** 5
		const a = 0
		const b = 0.8
		let N = [1, 2, 4]
		let F = N.map(n => trapezoid(n, f, a, b))
		let Y = F.map(y => Math.round(y * 10 ** 4) / 10 ** 4)
		let expected = [0.1728, 1.0688, 1.4848]
		for(let i = 0; i < expected.length; i++) {
			expected[i].should.equal(Y[i])
		}
	})
})

let trapezoid = require('../lib/trapezoid')
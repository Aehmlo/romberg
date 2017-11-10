const trapezoid = require('./trapezoid')
const combine = require('./combine')

module.exports = (threshold, maxIterations, f, a, b) => {
	let integrals = {}
	let relativeError = 1
	let i = 0
	for(; i < maxIterations && relativeError > threshold; i++) {
		let n = 2 ** i
		if(!integrals[i + 1]) integrals[i + 1] = {}
		integrals[i + 1][1] = trapezoid(n, f, a, b)
		for(let j = 2; j < i + 2; j++) {
			let k = 2 + i - j
			integrals[k][j] = combine(integrals[k + 1][j - 1], integrals[k][j - 1], k, j)
		}
		relativeError = integrals[2] ? Math.abs((integrals[1][i + 1] - integrals[2][i])/integrals[1][i + 1]) : 1
	}
	return integrals[1][i]
}
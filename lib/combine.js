const coefficients = require('./romberg-coefficients')

module.exports = (I, _I, j, k) => {
	let c = coefficients(j, k)
	return (I * c[0] - _I) / c[1]
}
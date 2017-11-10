const f = x => (x + 1/x)^2
const a = 1
const b = 2

function trapezoid(n, y, l, h) {
	n = parseInt(n)
	if(n < 1) throw new Error('Invalid number of segments')
	if(!y) y = f
	if(l === undefined) l = a
	if(h === undefined) h = b
	let dX = (h - l) / n
	let sum = y(l)
	for(let i = 1; i < n; i++) {
		sum += 2 * y(l + i * dX)
	}
	sum += y(h)
	return sum * dX / 2
}

module.exports = trapezoid
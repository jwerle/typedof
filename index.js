
/**
 * returns the type of a given input
 *
 * @api public
 * @param {Mixed} i
 */

module.exports = typed;
function typedof (i) {
	var type = ({}).toString
		.call(i)
		.toLowerCase()
		.replace(/^\[object\s+(.*)\]$/, '$1');

	if ('number' === type && i !== i) return 'nan';
	else return type
}
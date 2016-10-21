var keystone = require('keystone');

module.exports = (req, res, next) => {
	if (!res) {
		res = {}
	}

	if (!res.locals) {
		res.locals = {}
	}

	res.locals.blocks = {};

	keystone.list('Blocks').model.find({ 'active': true }).exec(function(err, results) {
		results.map((result) => {
			res.locals.blocks[result.slug] = result.code
		})

		next();
	});
}

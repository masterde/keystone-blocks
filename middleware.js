var keystone = require('keystone');
var i18n = require('i18n');

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
			res.locals.blocks[result.slug] = i18n.__(`${result.slug}:${result.code}`)
		})

		next();
	});
}

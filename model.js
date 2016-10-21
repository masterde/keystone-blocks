var keystone = require('keystone');
var Types = keystone.Field.Types;
var slugify = require('slugify')
var removeAccents = require('remove-accents');

module.exports = () => {
	var Blocks = new keystone.List('Blocks');

	Blocks.add({
		active: { type: Boolean, default: true, initial: true, required: true  },
		name: { type: String, initial: true, required: true  },
		slug: { type: String, noedit: true, nocreate: true },
		code: { type: Types.Html, wysiwyg: true, initial: true, required: true  }
	});

	Blocks.schema.pre('save', function(next) {
		this.slug = slugify(removeAccents(this.name)).toLowerCase()
		next()
	})

	Blocks.register();

}

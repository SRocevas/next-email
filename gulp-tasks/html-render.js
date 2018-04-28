module.exports = function () {
	var gulp = require('gulp'),
		inky = require('inky'),
		panini = require('panini'),
		config = require('../gulp.config.js')();

	return gulp.src(config.html.src)
		.pipe(panini({
			root: 'src/html',
			partials: 'src/html/components',
			layouts: 'src/layouts',
			pageLayouts: {
				'components': 'components'
			}
		}))
		.pipe(inky())
		.pipe(gulp.dest(config.html.dest));
};

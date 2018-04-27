module.exports = function () {
	var gulp = require('gulp'),
		inky = require('inky'),
		panini = require('panini'),
		config = require('../gulp.config.js')();

	function swallowError(error) {
		// If you want details of the error in the console
		console.log('\x1b[36m', error.toString(), '\x1b[0m');
		this.emit('end');
	}

	return gulp.src(config.html.src)
		.pipe(panini({
			root: 'src/html',
			layouts: 'src/layouts',
			pageLayouts: {
				'components': 'components'
			}
		}))
		.pipe(inky())
		.on('error', swallowError) //.pipe(htmlmin({collapseWhitespace: true,minifyCSS: true}))
		.pipe(gulp.dest(config.html.dest));
};

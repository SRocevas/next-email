module.exports = function () {
	var gulp = require('gulp'),
		sass = require('gulp-sass'),
		concat = require('gulp-concat'),
		uncss = require('gulp-uncss'),
		config = require('../gulp.config.js')();

	function swallowError(error) {
		// If you want details of the error in the console
		console.log('\x1b[36m', error.toString(), '\x1b[0m');
		this.emit('end');
	}

	return gulp.src(config.scss.src)
		.pipe(sass({
			outputStyle: 'expanded',
			sourceMap: true,
			noCache: false,
			includePaths: [config.scss.include].concat(config.tmp)
		}))
		.on('error', swallowError)
		.pipe(uncss({
			html: ['dist/**/*.html']
		}))
		.pipe(gulp.dest(config.scss.dest));
};

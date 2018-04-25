module.exports = function () {
	var gulp = require('gulp'),
		config = require('../gulp.config.js')(),
		inky = require('inky'),
		htmlmin = require('gulp-htmlmin'),
		connect = require('gulp-connect');

	function swallowError(error) {
		// If you want details of the error in the console
		console.log('\x1b[36m', error.toString(), '\x1b[0m');
		this.emit('end');
	}

	return gulp.src(config.html.src)
		.pipe(inky())
		.on('error', swallowError)
		.pipe(htmlmin({
		  collapseWhitespace: true,
		  minifyCSS: true
		}))
		.pipe(gulp.dest(config.html.dest))
		.pipe(connect.reload());
};
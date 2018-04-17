module.exports = function () {
	var gulp = require('gulp'),
		mjml = require('gulp-mjml'),
		htmlmin = require('gulp-htmlmin'),
		htmlbeautify = require('gulp-html-beautify'),
		config = require('../gulp.config.js')();

	function swallowError(error) {
		// If you want details of the error in the console
		console.log('\x1b[36m', error.toString(), '\x1b[0m');
		this.emit('end');
	}

	return gulp.src(config.html.src)
		.pipe(mjml())
		.on('error', swallowError)
		.pipe(gulp.dest(config.html.dest));
};

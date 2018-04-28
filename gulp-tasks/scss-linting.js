module.exports = function () {
	var gulp = require('gulp'),
		sassLint = require('gulp-sass-lint'),
		config = require('../gulp.config.js')();

	return gulp.src(config.scss.lint)
		.pipe(sassLint())
		.pipe(sassLint.format())
		.pipe(sassLint.failOnError());
};

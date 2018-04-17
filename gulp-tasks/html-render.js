module.exports = function () {
	var gulp = require('gulp'),
		mjml = require('gulp-mjml'),
		htmlmin = require('gulp-htmlmin'),
		htmlbeautify = require('gulp-html-beautify'),
		config = require('../gulp.config.js')();

	return gulp.src(config.html.src)
		.pipe(mjml())
		.pipe(htmlmin())
		.pipe(gulp.dest(config.html.dest));
};

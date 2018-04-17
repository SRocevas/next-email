module.exports = function () {
	var gulp = require('gulp'),
		config = require('../gulp.config.js')(),
		zip = require('gulp-zip');

	return gulp.src(config.zip.src)
		.pipe(zip('archive.zip'))
		.pipe(gulp.dest(config.zip.dest));
};

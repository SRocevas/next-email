module.exports = function () {
	var gulp = require('gulp'),
		config = require('../gulp.config.js')(),
		imagemin = require('gulp-imagemin'),
		cache = require('gulp-cache'),
		connect = require('gulp-connect');


	return gulp.src(config.images.src)
		.pipe(cache(imagemin([
			imagemin.optipng({
				optimizationLevel: 7
			})
		])))
		.pipe(gulp.dest(config.images.dest))
		.pipe(connect.reload());
};

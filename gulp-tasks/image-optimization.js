module.exports = function (done) {
	var gulp = require('gulp'),
		imagemin = require('gulp-imagemin'),
		cache = require('gulp-cache'),
		config = require('../gulp.config.js')();


	return gulp.src(config.images.src)
		.pipe(cache(imagemin([
			imagemin.optipng({
				optimizationLevel: 7
			})
		])))
		.pipe(gulp.dest(config.images.dest));
};

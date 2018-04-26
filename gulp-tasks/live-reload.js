const gulp = require('gulp'),
	connect = require('gulp-connect'),
	config = require('../gulp.config.js')();

module.exports = function () {
	gulp.src(
		config.html.src,
		config.scss.src,
		config.images.src
	).pipe(connect.reload());
};

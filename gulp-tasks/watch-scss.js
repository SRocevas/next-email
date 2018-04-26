const gulp = require('gulp'),
	runSequence = require('run-sequence').use(gulp),
	watch = require('gulp-watch'),
	config = require('../gulp.config.js')();

module.exports = function () {
	watch(
		config.scss.src,
		() => runSequence('compile-scss', 'live-reload')
	);
};

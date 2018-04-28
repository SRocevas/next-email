const gulp = require('gulp'),
	runSequence = require('run-sequence').use(gulp),
	watch = require('gulp-watch'),
	config = require('../gulp.config.js')();

module.exports = function () {
	watch(
		config.srcFolder + '/html/*.html',
		() => runSequence('html-render', 'inline-css', 'live-reload')
	);
	watch(
		config.srcFolder + '/html/components/*.html',
		() => runSequence('clear-html-cache', 'html-render', 'inline-css', 'live-reload')
	);
};
const gulp = require('gulp'),
	runSequence = require('run-sequence').use(gulp),
	watch = require('gulp-watch'),
	config = require('../gulp.config.js')();

module.exports = function () {
	watch(
		config.scss.src,
		() => runSequence('clear-html-cache', 'scss-linting', 'compile-scss', 'html-render', 'inline-css', 'live-reload')
	);
};

const gulp = require('gulp'),
	runSequence = require('run-sequence').use(gulp),
	watch = require('gulp-watch'),
	config = require('../gulp.config.js')();

module.exports = function () {
	watch(
		config.images.src,
		() => runSequence('himage-optimization', 'live-reload')
	);
};

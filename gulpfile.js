var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	config = require('./gulp.config.js')();

require('gulp-task-loader')();

gulp.task("start", function () {

	return runSequence(
		'clean',
		'build',
		'watch-all',
		'live-server'
	);
});

gulp.task("zip", function () {

	return runSequence(
		'clean',
		'build',
		'compress-files'
	);
});

gulp.task("mail", function () {

	return runSequence(
		'clean',
		'build',
		'send-mail'
	);
});

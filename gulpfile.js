var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	config = require('./gulp.config.js')();

require('gulp-task-loader')();

gulp.task("start-safe", function () {
	return require("check-dependencies")({
		install: true,
		verbose: true
	}, function () {

		return runSequence(
			'clean',
			'prepare-assets',
			'watch-html',
			'watch-images',
			'watch-scss',
			'live-server'
		);
	});
});

gulp.task("start", function () {

	return runSequence(
		'clean',
		'prepare-assets',
		'watch-all',
		'live-server'
	);
});

gulp.task("zip", function () {

	return runSequence(
		'clean',
		'prepare-assets',
		'compress-files'
	);
});

gulp.task("mail", function () {

	return runSequence(
		'clean',
		'prepare-assets',
		'send-mail'
	);
});

var gulp = require('gulp'),
	config = require('./gulp.config.js')();

gulp.task("start-safe", function () {
	return require("check-dependencies")({
		install: true,
		verbose: true
	}, function () {
		require('gulp-task-loader')();

		return gulp.start('develop');
	});
});

gulp.task("start", function () {
	require('gulp-task-loader')();

	return gulp.start('develop');
});

gulp.task("zip", function () {
	require('gulp-task-loader')();

	return gulp.start('archive');
});

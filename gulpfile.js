var gulp = require('gulp'),
	config = require('./gulp.config.js')();

require('gulp-task-loader')();

gulp.task("start-safe", function () {
	return require("check-dependencies")({
		install: true,
		verbose: true
	}, function () {

		return gulp.start('develop');
	});
});

gulp.task("start", function () {

	return gulp.start('develop');
});

gulp.task("zip", function () {

	return gulp.start('prepare-archive');
});

gulp.task("mail", function () {

	return gulp.start('prepare-mail');
});
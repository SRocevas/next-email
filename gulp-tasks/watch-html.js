module.exports = function () {
	var gulp = require('gulp'),
		runSequence = require('run-sequence').use(gulp),
		config = require('../gulp.config.js')();
	
	gulp.watch('src/**/*.mjml', () =>
		runSequence(
			'html-render',
			'live-reload',
			'html-hint'
		)
	);
};

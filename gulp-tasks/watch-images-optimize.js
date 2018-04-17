module.exports = function () {
	var gulp = require('gulp'),
		runSequence = require('run-sequence').use(gulp),
		config = require('../gulp.config.js')();
	
	gulp.watch(config.images.src, () =>
		runSequence(
			'image-optimization',
			'live-reload'
		)
	);
};

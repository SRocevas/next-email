module.exports = function () {
	let gulp = require('gulp'),
		runSequence = require('run-sequence').use(gulp);

	runSequence(
		'clean',
		'prepare-assets',
		'clear-image-cache',
		'compress-files'
	);
};

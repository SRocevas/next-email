module.exports = function (done) {
	var runSequence = require('run-sequence');

	return runSequence(
		'image-optimization',
		'clear-image-cache',
		'html-render',
		'compile-scss',
		'inline-css',
		done);
};

module.exports = function (done) {
	var runSequence = require('run-sequence');

	return runSequence(
		'image-optimization',
		'html-render',
		'compile-scss',
		'inline-css',
	done);
};

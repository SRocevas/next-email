module.exports = function (done) {
	var runSequence = require('run-sequence');

	return runSequence(
		'image-optimization',
		'html-render',
		'html-hint',
		done);
};

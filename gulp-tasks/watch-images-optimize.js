module.exports = function () {
	var gulp = require('gulp'),
		config = require('../gulp.config.js')();
	
	gulp.watch(config.images.src, ['himage-optimization']);
};

module.exports = function () {
	var gulp = require('gulp'),
		config = require('../gulp.config.js')();
	
	gulp.watch('src/**/*.mjml', ['html-render', 'html-hint']);
};

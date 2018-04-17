module.exports = function () {
	let gulp = require('gulp'),
		connect = require('gulp-connect'),
		config = require('../gulp.config.js')();

	gulp.src('./dist/**/*.*')
		.pipe(connect.reload());

};

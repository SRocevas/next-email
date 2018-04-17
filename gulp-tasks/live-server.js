module.exports = function () {
	var gulp = require('gulp'),
		config = require('../gulp.config.js')(),
		open = require('gulp-open'),
		connect = require('gulp-connect');

	var server = connect.server({
		root: config.server.options.root,
		port: config.server.options.port,
		livereload: config.server.options.livereload
	});

	return gulp.src('./')
		.pipe(open({
			uri: 'http://' + server.host + ':' + server.port
		}));
};

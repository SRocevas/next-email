module.exports = function () {
	var gulp = require('gulp'),
		inlineCss = require('gulp-inline-css'),
		config = require('../gulp.config.js')();

	return gulp.src(config.html.dest + '/*.html')
		.pipe(inlineCss({
			applyStyleTags: false,
			applyLinkTags: true,
			preserveMediaQueries: true,
			removeStyleTags: false,
			removeLinkTags: false
		}))
		.pipe(gulp.dest(config.distFolder + '/build'));
};
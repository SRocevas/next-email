module.exports = function () {
	var gulp = require('gulp'),
		config = require('../gulp.config.js')(),
		inlineCss = require('gulp-inline-css');

	return gulp.src('/dist/**/*.html')
		.pipe(inlineCss({
			applyStyleTags: false,
			applyLinkTags: true,
			preserveMediaQueries: true,
			removeLinkTags: false
		}))
		.pipe(gulp.dest(config.html.dest));
};
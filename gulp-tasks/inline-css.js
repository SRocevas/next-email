module.exports = function () {
	var gulp = require('gulp'),
		inlineCss = require('gulp-inline-css'),
		htmlmin = require('gulp-htmlmin'),
		siphon = require('siphon-media-query'),
		lazypipe = require('lazypipe'),
		replace = require('gulp-replace'),
		fs = require('fs'),
		config = require('../gulp.config.js')();

	return gulp.src(config.html.dest + '/**/*.html')
		.pipe(inliner('dist/css/app.css'))
		.pipe(gulp.dest(config.distFolder));

	function inliner(css) {
		var css = fs.readFileSync(css).toString();
		var mqCss = siphon(css);

		var pipe = lazypipe()
			.pipe(inlineCss, {
				applyStyleTags: false,
				removeStyleTags: true,
				preserveMediaQueries: true,
				removeLinkTags: false
			})
			.pipe(replace, '<!-- <style> -->', `<style>${mqCss}</style>`)
			.pipe(replace, '<link rel="stylesheet" type="text/css" href="css/app.css">', '')
			.pipe(replace, '<link rel="stylesheet" type="text/css" href="../css/app.css">', '')
			.pipe(htmlmin, {
				collapseWhitespace: true,
				minifyCSS: true
			});

		return pipe();
	}
};

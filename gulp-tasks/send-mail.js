module.exports = function () {
	var gulp = require('gulp'),
		config = require('../gulp.config.js')(),
		argv = require('yargs').argv,
		fs = require('fs'),
		nodemailer = require('nodemailer');
	
	var template = argv.template ? argv.template : (argv.t ? argv.t : null);

	if (! template) {
		return console.log('***ERROR***: Name of template is missing.\n', 'red');
	}
	
	// Nodemailer
	var transporter = nodemailer.createTransport(config.nodemailer.transportOptions);
	var mailOptions = config.nodemailer.mailOptions;
	// Update config values
	mailOptions.to = argv.to ? argv.to : config.nodemailer.mailOptions.to;
	mailOptions.subject = argv.subject ? argv.subject : config.nodemailer.mailOptions.subject;

	// get template contents and send email
	fs.readFile(config.distFolder + '/' + template + '.html', 'utf8', function (err, data) {
		if (err) {
			handleError(err);
		}
		var regExp = /(\.\.)?\/?images\//g;
		mailOptions.html = data.replace(regExp, config.nodemailer.imageHost);

		// Send the email
		transporter.sendMail(mailOptions, function (err, info) {
			if (err) {
				handleError(err);
			}
			console.log('Test email for template ' + template + ' sent successfully \n');
		});

	});
};

var mailerConfig = require('./mailer.config')();

module.exports = function () {
	const srcFolder = 'src';
	const distFolder = 'dist';

	const config = {
		srcFolder: srcFolder,
		distFolder: distFolder,
		packages: [
			'./package.json'
		],
		html: {
			src: [
				`./${srcFolder}/html/**/*.html`
			],
			dest: `./${distFolder}/`,
			options: {
				beautify: {
					indentSize: 4
				}
			}
		},
		scss: {
			src: [
                `./${srcFolder}/scss/**/*.scss`,
                `./${srcFolder}/components/**/*.scss`,
            ],
			include: [
                `./node_modules/foundation-emails/scss/`,
            ],
			lint: [
                `./${srcFolder}/scss/**/*.scss`,
                `./${srcFolder}/components/**/*.scss`,
            ],
			dest: `./${distFolder}/css/`
		},
		images: {
			src: `./${srcFolder}/img/**/*.{png,gif,jpg}`,
			dest: `./${distFolder}/img/`,
			options: {
				optimizationLevel: 7,
				progessive: true,
				interlaced: true
			}
		},
		zip: {
			src: `./${distFolder}/*`,
			dest: `./${distFolder}/*`
		},
		server: {
			options: {
				root: 'dist',
				port: '8000',
				livereload: true
			}
		},
		nodemailer: mailerConfig
	};

	return config;
};

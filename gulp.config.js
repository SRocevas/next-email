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
				`./${srcFolder}/**/*.mjml`,
				`!./${srcFolder}/style/**/*.mjml`
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
			lint: [
                `./${srcFolder}/scss/**/*.scss`,
                `./${srcFolder}/components/**/*.scss`,
            ],
			dest: `./${srcFolder}/css/`
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
		}
	};

	return config;
};

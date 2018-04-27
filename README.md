# Next Email

## Introduction

Starter base for Email templating with Gulp, [Zurb Emails](https://foundation.zurb.com/emails.html). It has a Gulp-powered build system with these features:

- [Zurb Emails](https://foundation.zurb.com/emails.html) engine
- Live server with auto reload feature
- Sass linting integration and configuration (Working)
- Automated image optimization
- Recommended structure for HTML layout
- Automated Html linting task


## Installation

To setup new project clone this repo:

```
$ git://github.com/SRocevas/next-email.git
```

Inside project folder install dependencies from package.json:

```
$ npm i
```

To start developing run npm script command:

```
$ npm run start
```

Or launch command with "check-dependencies" mode, which will check if all needed dependencies are installed:

```
$ npm run start-safe
```

It will start all development tasks: prepare assets, compile html and css, and add file watchers.

ZIP compress files:

```
$ npm run zip
```

send a test email using your default configuration in nodemailer.config.js

```
$ npm run mail --template=NAME
```


## TODO

- [X] Change MJML to Zurb emails
- [X] Sass integration
- [ ] HTML minifier and beautifier
- [X] Inline css
- [ ] Seperate html components
- [X] Send test emails


## License

The MIT License (MIT).

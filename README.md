# Next Email

## Introduction

Starter base for Email templating with Gulp, [Foundation for Emails](https://foundation.zurb.com/emails.html). It has a Gulp-powered build system with these features:

- [Foundation for Emails](https://foundation.zurb.com/emails.html) framework
- Handlebars HTML templates with [Panini](http://github.com/zurb/panini)
- Simplified HTML email syntax with [Inky](http://github.com/zurb/inky)
- Sass linting integration and configuration (Working)
- Recommended structure for HTML layout
- Automated image optimization
- Automated email inlining process
- Live server with auto reload feature

## Installation

To setup new project clone this repo:

```
$ git://github.com/srocevas/next-email.git
```

Inside project folder install dependencies from package.json:

```
$ npm i
```

To start developing run npm script command:

```
$ gulp start
```

ZIP compress files:

```
$ gulp zip
```

Send a test email using your default configuration in mailer.config.js

```
$ gulp mail --template=NAME
```
or
```
$ gulp send-mail --template=newsletter
```


## TODO

- [X] Change MJML to Zurb emails
- [X] Sass integration
- [X] HTML minifier and beautifier
- [X] Inline css
- [X] Seperate html components
- [X] Send test emails
- [X] Sass linting
- [ ] Set environments
- [ ] HTML WC3 validator


## License

The MIT License (MIT).

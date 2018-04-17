# Next Email

## Introduction

Starter base for Email templating with Gulp, MJML. It has a Gulp-powered build system with these features:

- [MJML](https://mjml.io/) engine
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


## TODO
- [ ] HTML minifier and beautifier
- [ ] Update to MJML 4 syntax
- [ ] Sass integration
- [ ] Seperate html components
- [ ] Send test emails


## License

The MIT License (MIT).
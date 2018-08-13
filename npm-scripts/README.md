# npm-scripts

## Example of using NPM scripts for builds instead of Gulp/Grunt.

### Setup

* `npm install`
* To build JS, run: `npm run build`
* To build JS w/o source maps, run: `npm run build:prod`
* Build JS with file watcher: `npm run watch:build` and `npm run watch:build:prod`. Requires [filewatcher](https://rubygems.org/gems/filewatcher).
* To build SCSS, run: `npm run sass`, `npm run sass:prod`, or `npm run watch:sass`.
* Build both JS and SCSS via: `build:js:sass` or `watch:build:js:sass`.
* Run tests with `npm test`
* Produce code coverage reports using `npm run test:coverage`. Then open `./coverage/lcov-report/index.html` in your browser.

### Notes

* Scripts prefixed with "pre" and "post" are hooks.
* For the lint command, glob must be contained in double quotes, so "node glob style" is used.

### TODO

* Multiple JS builds. EG: Multiple end files like products.min.js and account.min.js

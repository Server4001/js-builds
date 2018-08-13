"use strict";

// TODO : Add SCSS.

const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const eslint = require('gulp-eslint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourceMaps = require('gulp-sourcemaps');
const gulpUtil = require('gulp-util');
const livereload = require('gulp-livereload');

// If not using Express.js, you can use the gulp dev-server
// which includes live reload on it's own.
// const connect = require('gulp-connect');
// const open = require('gulp-open');

const config = {
    port: 1234,
    devBaseUrl: 'http://localhost',
    paths: {
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/toastr/build/toastr.min.css',
            './src/css/**/*.css'
        ],
        dist: './dist',
        html: './src/*.html',
        img: './src/img/*',
        js: './src/js/**/*.js',
        jsMain: './src/js/main.js',
    }
};

// Start dev server.
// gulp.task('connect', () => {
//     connect.server({
//         root: ['dist'],
//         port: config.port,
//         base: config.devBaseUrl,
//         livereload: true
//     });
// });

// Open in browser.
// gulp.task('open', ['connect'], () => {
//     gulp.src('dist/index.html')
//         .pipe(open({ uri: `${config.devBaseUrl}:${config.port}/` }));
// });

// Build html files.
gulp.task('html', () => {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(livereload());
        // .pipe(connect.reload());
});

// Build js files.
gulp.task('js', () => {
    const b = browserify({
        entries: config.paths.jsMain,
        debug: true
    });

    //noinspection JSUnresolvedFunction
    return b.transform(babelify, { presets: [ 'react', 'latest' ] })
        .bundle()
        .pipe(source('bundle.min.js'))
        .pipe(buffer())
        .pipe(sourceMaps.init({ loadMaps: true }))
        .pipe(uglify({ mangle: false }))
        .on('error', gulpUtil.log) // TODO : Consider removing this, and gulpUtil from package.json.
        // .on('error', console.error.bind(console))
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest(`${config.paths.dist}/scripts/`))
        .pipe(livereload());
        // .pipe(connect.reload());
});

// Lint JS files.
gulp.task('lint', () => {
    return gulp.src(config.paths.js)
        .pipe(eslint({ configFile: './eslint.config.json' }))
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

// Build CSS files.
gulp.task('css', () => {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(`${config.paths.dist}/css`))
        .pipe(livereload());
        // .pipe(connect.reload());
});

// Copy images.
gulp.task('images', () => {
    gulp.src(config.paths.img)
        .pipe(gulp.dest(`${config.paths.dist}/img`))
        .pipe(livereload());
        // .pipe(connect.reload());
});

// File watcher.
gulp.task('watch', () => {
    // Listen for livereload connections from the browser.
    livereload.listen();
    // When HTML is changed, re-build it.
    gulp.watch(config.paths.html, ['html']);
    // When JS is changed, re-build it.
    gulp.watch(config.paths.js, ['lint', 'js']);
    // When CSS is changed, re-build it.
    gulp.watch(config.paths.css, ['css']);
    // When images are changed, re-add them.
    gulp.watch(config.paths.img, ['images']);
});

// Set production mode for React.
gulp.task('set-prod-mode', function() {
    process.env.NODE_ENV = 'production';
});

// Set the Gulp tasks.
gulp.task('prod', [
    'set-prod-mode',
    'html',
    'lint',
    'js',
    'css',
    'images',
    // 'open',
    'watch'
]);

gulp.task('dev', [
    'html',
    'lint',
    'js',
    'css',
    'images',
    // 'open',
    'watch'
]);

gulp.task('default', [
    'set-prod-mode',
    'html',
    'lint',
    'js',
    'css',
    'images',
    // 'open',
    'watch'
]);

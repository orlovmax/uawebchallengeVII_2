// Include gulp
var gulp = require('gulp'),
	paths = require('../paths'),
    changed = require('gulp-changed'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat');


// Concatenate & Minify JS
gulp.task('concat', function() {
    return gulp.src([paths.dev.js + '/*.js', '!' + paths.dev.js + '/assembled.js'])
        .pipe(plumber())
        .pipe(concat('assembled.js'))
        .pipe(gulp.dest(paths.dev.js)),

        gulp.src([paths.dev.js + '/vendor/*.js', '!' + paths.dev.js + '/vendor/vendor.js'])
        .pipe(plumber())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(paths.dev.js + '/vendor')),

        gulp.src([paths.dev.js + '/ie/*.js', '!' + paths.dev.js + '/ie/ie.js'])
        .pipe(plumber())
        .pipe(concat('ie.js'))
        .pipe(gulp.dest(paths.dev.js + '/ie'));
});

// Concatenate & Minify JS
gulp.task('concat:changed', function() {
    return gulp.src([paths.dev.js + '/*.js', '!' + paths.dev.js + '/assembled.js'])
        .pipe(plumber())
        .pipe(changed(paths.dev.js))
        .pipe(concat('assembled.js'))
        .pipe(gulp.dest(paths.dev.js)),

        gulp.src([paths.dev.js + '/vendor/*.js', '!' + paths.dev.js + '/vendor/vendor.js'])
        .pipe(plumber())
        .pipe(changed(paths.dev.js + '/vendor'))
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(paths.dev.js + '/vendor')),

        gulp.src([paths.dev.js + '/ie/*.js', '!' + paths.dev.js + '/ie/ie.js'])
        .pipe(plumber())
        .pipe(changed(paths.dev.js + '/ie'))
        .pipe(concat('ie.js'))
        .pipe(gulp.dest(paths.dev.js + '/ie'));
});

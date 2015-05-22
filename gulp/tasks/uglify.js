// Include gulp
var gulp = require('gulp'),
	paths = require('../paths'),
	plumber = require('gulp-plumber'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');


gulp.task('uglify', function() {
    return gulp.src(paths.dev.js + '/assembled.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.build.js)),

        gulp.src(paths.dev.js + '/vendor/vendor.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.build.js + '/vendor')),

        gulp.src(paths.dev.js + '/ie/ie.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.build.js + '/ie'));
});

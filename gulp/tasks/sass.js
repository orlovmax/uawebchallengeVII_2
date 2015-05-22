// Include gulp
var gulp = require('gulp'),
	paths = require('../paths'),
    changed = require('gulp-changed'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-ruby-sass');


//Compile *.sass, *.scss files
gulp.task('sass', function() {
    return sass(paths.dev.styles, {style: 'expanded'})
        .pipe(gulp.dest(paths.dev.css));
});

//Compile changed *.sass, *.scss files
gulp.task('sass:changed', function() {
    return sass(paths.dev.styles, {style: 'expanded'})
        .pipe(gulp.dest(paths.dev.css));
});

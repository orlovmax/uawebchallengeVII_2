// Include gulp
var gulp = require('gulp'),
	paths = require('../paths'),
    changed = require('gulp-changed'),
    plumber = require('gulp-plumber'),
    jade = require('gulp-jade');


//Compile *.jade files
gulp.task('jade', function() {
    return gulp.src(paths.dev.templates + '/pages/**/*.jade')
        .pipe(plumber())
        .pipe(jade({
            client: false,
            pretty: true
        }))
    .pipe(gulp.dest(paths.dev.html));
});

// Compile changed *.jade files
gulp.task('jade:changed', function() {
    return gulp.src(paths.dev.templates + '/pages/**/*.jade')
        .pipe(plumber())
        .pipe(changed(paths.dev.html))
        .pipe(jade({
            client: false,
            pretty: true
        }))
    .pipe(gulp.dest(paths.dev.html));
});

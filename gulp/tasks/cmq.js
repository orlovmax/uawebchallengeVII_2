// Include gulp
var gulp = require('gulp'),
	paths = require('../paths'),
	plumber = require('gulp-plumber'),
	cmq = require('gulp-combine-media-queries');


//Combine media queries in result *.css files
gulp.task('cmq', function () {
    return gulp.src(paths.dev.styles + '/*.css')
        .pipe(plumber())
        .pipe(cmq({
            log: false
        }))
        .pipe(gulp.dest(paths.dev.css));
});

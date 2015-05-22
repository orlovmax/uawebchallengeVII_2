// Include gulp
var gulp = require('gulp'),
	paths = require('../paths'),
    plumber = require('gulp-plumber'),
    htmlmin = require('gulp-htmlmin');


//Minify *.html files
gulp.task('htmlmin', function() {
    return gulp.src(paths.dev.html + '/**/*.html')
        .pipe(plumber())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(paths.build.main));
});

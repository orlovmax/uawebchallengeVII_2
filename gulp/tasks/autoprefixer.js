// Include gulp
var gulp = require('gulp'),
	paths = require('../paths'),
	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer');


//Autoprefixer
gulp.task('autoprefixer', function () {
    return gulp.src(paths.dev.styles + '/*.css')
        .pipe(plumber())
        .pipe(autoprefixer({
           // By default >1%, last 2 versions, Firefox ESR, Opera 12.1;
            browsers: ['last 2 versions', 'ie 8', 'ie 9'] ,
            cascade: true
        }))
        .pipe(gulp.dest(paths.dev.css));
});

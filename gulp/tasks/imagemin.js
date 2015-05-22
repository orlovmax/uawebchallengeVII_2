// Include gulp
var gulp = require('gulp'),
	paths = require('../paths'),
    changed = require('gulp-changed'),
    plumber = require('gulp-plumber'),
    imagemin = require('gulp-imagemin');


// Minify image files
gulp.task('imagemin', function () {
    return gulp.src(paths.dev.img + '/**/*.{png,jpg,gif}')
        .pipe(plumber())
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 7
        }))
        .pipe(gulp.dest(paths.build.img));
});

// Minify changed images
gulp.task('imagemin:changed', function () {
    return gulp.src(paths.dev.img + '/**/*.{png,jpg,gif}')
        .pipe(plumber())
        .pipe(changed(paths.build.img))
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 7
        }))
        .pipe(gulp.dest(paths.build.img));
});

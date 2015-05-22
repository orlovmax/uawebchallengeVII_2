var gulp = require('gulp'),
	paths = require('../paths'),
	plumber = require('gulp-plumber'),
	zip = require('gulp-zip');

gulp.task('compress:build', function () {
    return gulp.src([paths.build.main + '/**', paths.build.main  + '/.htaccess'])
    	.pipe(plumber())
        .pipe(zip(paths.archives.build))
        .pipe(gulp.dest(paths.archives.main));
});

gulp.task('compress:dev', function () {
    return gulp.src(['./*',
    				 paths.dev.main  + '/**',
    				 './gulp/**',
    				 './.editorconfig',
    				 './.gitignore',
    				 paths.dev.helpers  + '/.htaccess',
    				 '!./build',
    				 '!./' + paths.archives.main,
    				 '!./' + paths.dev.design,
    				 '!./node_modules',
    				 '!./bower_components',
    				 '!./test_screenshots'], {base: "."})
    	.pipe(plumber())
        .pipe(zip(paths.archives.dev))
        .pipe(gulp.dest(paths.archives.main));
});

gulp.task('compress:all', function () {
    return gulp.src(['./*',
    				 paths.dev.main  + '/**',
    				 paths.build.main + '/**',
    				 paths.dev.helpers  + '/.htaccess',
    				 paths.build.main  + '/.htaccess',
    				 './gulp/**',
    				 './.editorconfig',
    				 './.gitignore',
    				 '!./' + paths.archives.main,
    				 '!./' + paths.dev.design,
    				 '!./node_modules',
    				 '!./bower_components',
    				 '!./test_screenshots'], {base: "."})
    	.pipe(plumber())
        .pipe(zip(paths.archives.all))
        .pipe(gulp.dest(paths.archives.main));
});

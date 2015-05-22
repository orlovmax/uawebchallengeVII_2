// Include gulp
var gulp = require('gulp'),
	paths = require('../paths'),
	plumber = require('gulp-plumber'),
	mainBowerFiles = require('main-bower-files');


// Copy bower files into js vendor folder
gulp.task('bower-copy:vendor', function() {
	return gulp.src(mainBowerFiles({
		overrides: {
			jquery: {
				main: "dist/jquery.js"
			},
			d3: {
				main: "d3.js"
			},
			html5shiv: {
				ignore: true
			},
			respond: {
				ignore: true
			},
			"jquery-form-validator": {
				ignore: true
			}
		}
	}))
		.pipe(plumber())
		.pipe(gulp.dest(paths.dev.js + '/vendor'));
});

// Copy bower files into js ie folder
gulp.task('bower-copy:ie', function() {
	return gulp.src(mainBowerFiles({
		overrides: {
			jquery: {
				ignore: true
			},
			d3: {
				ignore: true
			},
			"jquery-form-validator": {
				ignore: true
			},
			html5shiv: {
				main: "dist/html5shiv.js"
			},
			respond: {
				main: "src/respond.js"
			}
		}
	}))
		.pipe(plumber())
		.pipe(gulp.dest(paths.dev.js + '/ie'));
});

// Copy bower files into common js folder
gulp.task('bower-copy:module', function() {
	return gulp.src(mainBowerFiles({
		overrides: {
			jquery: {
				ignore: true
			},
			d3: {
				ignore: true
			},
			html5shiv: {
				ignore: true
			},
			respond: {
				ignore: true
			},
			"jquery-form-validator": {
				main: "form-validator/jquery.form-validator.js"
			}
		}
	}))
		.pipe(plumber())
		.pipe(gulp.dest(paths.dev.js));
});

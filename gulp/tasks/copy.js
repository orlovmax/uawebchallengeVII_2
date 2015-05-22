// Include gulp
var gulp = require('gulp'),
	paths = require('../paths'),
    changed = require('gulp-changed');


//Copy php scripts and other stuff from dev to build folder.
// Credits to @jbdemonte https://github.com/gulpjs/gulp/issues/151
gulp.task('copy:fonts', function() {
  return gulp.src([paths.dev.fonts + '/**/'], {base: paths.dev.fonts})
    .pipe(gulp.dest(paths.build.fonts));
});
gulp.task('copy:js', function() {
  return gulp.src([paths.dev.js + '/assembled.js',
  								 paths.dev.js + '/vendor/vendor.js',
									 paths.dev.js + '/head/head.js'], {base: paths.dev.js})
    .pipe(gulp.dest(paths.build.js));
});
gulp.task('copy:livejs', function() {
  return gulp.src(paths.dev.devtools + '/live.js', {base: paths.dev.devtools})
    .pipe(gulp.dest(paths.build.js));
});
gulp.task('copy:css', function() {
  return gulp.src([paths.dev.css + '/**/'], {base: paths.dev.css})
    .pipe(gulp.dest(paths.build.css));
});
gulp.task('copy:html', function() {
  return gulp.src([paths.dev.html + '/**/'], {base: paths.dev.html})
    .pipe(gulp.dest(paths.build.main));
});
gulp.task('copy:helpers', function() {
  return gulp.src([paths.dev.helpers + '/**/', paths.dev.helpers + '/.htaccess'], {base: paths.dev.helpers})
    .pipe(gulp.dest(paths.build.main));
});


// Copy oly changed files
gulp.task('copy:fonts:changed', function() {
  return gulp.src([paths.dev.fonts + '/**/'], {base: paths.dev.fonts})
    .pipe(changed(paths.build.fonts))
    .pipe(gulp.dest(paths.build.fonts));
});
gulp.task('copy:js:changed', function() {
  return gulp.src([paths.dev.js + '/**/'], {base: paths.dev.js})
    .pipe(changed(paths.build.js))
    .pipe(gulp.dest(paths.build.js));
});
gulp.task('copy:livejs:changed', function() {
  return gulp.src(paths.dev.devtools + '/live.js', {base: paths.dev.devtools})
    .pipe(changed(paths.build.js))
    .pipe(gulp.dest(paths.build.js));
});
gulp.task('copy:css:changed', function() {
  return gulp.src([paths.dev.css + '/**/'], {base: paths.dev.css})
    .pipe(changed(paths.build.css))
    .pipe(gulp.dest(paths.build.css));
});
gulp.task('copy:html:changed', function() {
  return gulp.src([paths.dev.html + '/**/'], {base: paths.dev.html})
    .pipe(changed(paths.build.main))
    .pipe(gulp.dest(paths.build.main));
});
gulp.task('copy:helpers:changed', function() {
  return gulp.src([paths.dev.helpers + '/**/'], {base: paths.dev.helpers})
    .pipe(changed(paths.build.main))
    .pipe(gulp.dest(paths.build.main));
});
